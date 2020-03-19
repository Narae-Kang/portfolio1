window.addEventListener("load",init,false);
function init(){
  joinBtn.addEventListener("click",function(e){
    e.preventDefault();

  if (checkValid()) {
//	유효성 통과하면 메인화면으로 이동
//	location.href="../mainl.jsp";
	document.getElementById("joinFrm").submit();    	
  	}  
  },false);

}

function checkValid(){
  // alert('호출됨');
  // 사용자 입력값 읽어오기
  var idEle = document.getElementById('id');
  var pwEle = document.getElementById('pw');
  var pwChkEle = document.getElementById('pwChk');
  var telEle = document.getElementById('tel');
  var nicknameEle = document.getElementById('nickname');
  var birthEle = document.getElementById('birth');
  var regionEle = document.getElementById('region');
  var genderEle = document.getElementsByName('gender');

  var flag = true; /* 회원가입 유효성 체크 유무 */

//  console.log(idEle.value,
//              pwEle.value,
//              pwChkEle.value,
//              telEle.value,
//              regionEle.options[regionEle.selectedIndex].text,
//              genderEle.value
//              );
  //1) 이메일 주소 체크
    if(!isEmail(idEle.value)) {
      id_errmsg.innerHTML = "아이디(Email) 형식이 올바르지 않습니다.";
      flag = flag && false;
    }else{
      id_errmsg.innerHTML = "";
    }
  //2) 비밀번호 체크
	if(!isPassword(pwEle.value)) {
	  pw_errmsg.innerHTML = "비밀번호 형식이 올바르지 않습니다.";
	  flag = flag && false;    
	}else{
	  pw_errmsg.innerHTML = "";
	}
  //3) 비밀번호 재확인
    //3-1)비밀번호 패턴 체크
    if(!isPassword(pwChkEle.value)) {
      pwChk_errmsg.innerHTML = "비밀번호가 잘못되었습니다.";
      flag = flag && false;
    }else{
      pwChk_errmsg.innerHTML = "";
    }
    //3-2)비밀번호 일치 체크
    if(pwEle.value != pwChkEle.value ) {
      pwChk_errmsg.innerHTML = "비밀번호가 일치하지 않습니다.";
      flag = flag && false;
    }else {
      pwChk_errmsg.innerHTML = "";
    }
  //4) 전화번호
    if(!isTel(telEle.value)) {
      tel_errmsg.innerHTML = "전화번호 형식이 올바르지 않습니다.";
      flag = flag && false;
    }else{
      tel_errmsg.innerHTML = "";
    }    
  //5) 지역
    if(regionEle.selectedIndex == 0){
      region_errmsg.innerHTML = "필수 선택사항 입니다.";
      flag = flag && false;
    }else{
      region_errmsg.innerHTML = "";
    }
  //6) 성별
    var status = false;
    for(var gender of genderEle) {
      if(gender.checked) {
        status = true;
        break;
      }
    }
    if(!status) {
      gender_errmsg.innerHTML = "필수 선택사항 입니다.";
      flag = flag && false;
    }else{
      gender_errmsg.innerHTML = "";
    }
    
    //7) 생년 월일
    if(birthEle.value == null) {
    	birth_errmsg.innerHTML = "필수 선택사항입니다.";
        flag = flag && false;
      }else{
    	birth_errmsg.innerHTML = "";
      }
    return flag;
    
  //8) 유효성 통과하면 메인화면으로 이동
//    if(flag)  {
//    	location.href="../mainl.jsp";
//    	document.getElementById("joinFrm").submit();
//    }

}
// 이메일 체크 정규식
function isEmail(asValue) {
  var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴	
}

// 핸드폰 번호 체크 정규식
function isTel(asValue) {
  var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

//비밀번호 체크 정규식
function isPassword(asValue) {
  var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}