//슬라이크 전체 크기(width 구하기)
const slide=document.querySelector(".slide");
let slideWidth=slide.clientWidth;//clientWidth:padding값까지만 적용된 실제 크기를 가져옴 즉,class slide의 pdding값을 변수에 넣는다.

//버튼 엘리먼트 선택하기 엘리먼트=요소
const prevBtn=document.querySelector(".slider_prev_button");
const nextBtn=document.querySelector(".slider_next_button");
//슬라이드 전페를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
const slideItems=document.querySelectorAll(".slider_item");
//현제 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
const maxSlide=slideItems.length;

//버튼 클릭할 때 마다 현제 슬라이드가 어디인지 알려주기 위한 변수
let currSlide=1;//let:선언과 동시에 값을 초기화시킬수 있음

//버튼 엘리먼트에 클릭 이벤트 추가하기
nextBtn.addEventListener("click",() => {
    //이후 버튼 누를 경우 현재 슬라이드를 변경
    currSlide++;
    //마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
    if(currSlide <= maxSlide){
        //offset:선택한 요소의 좌표를 가져오거나 
        //슬라이드 이동시키기 위한 offset 계산
        const offset=slideWidth*(currSlide-1);
        //각 슬라이드 아이템의 left offset 적용
        slideItems.forEach((i)=>{
            i.setAttribute("style",`left: ${-offset}px`);
        });
    }else{
        currSlide--;
    }
});
prevBtn.addEventListener("click",()=>{
    currSlide--;
    if(currSlide>0){
        const offset=slideWidth*(currSlide-1);
        slideItems.forEach((i)=>{
            i.setAttribute("style",`left: ${-offset}px`);
        });
    }else{
        currSlide++;
    }
});
//부라우저 화면이 조정될때 마다 slidWidth를 변경하기 위해
window.addEventListener("resize",()=>{
    slideWidth=slide.clientHeight;
});