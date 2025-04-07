$(function () {
    // 네비게이션 메뉴 애니메이션
    $('.pc-nav').on('mouseenter', function () {
        $('.nav-bg').stop().animate({ height: 220 }, 300);
        $('.depth-02').stop().fadeIn();
    });

    $('.header-inner').on('mouseleave', function () {
        $('.nav-bg').stop().animate({ height: 0 }, 300);
        $('.depth-02').stop().fadeOut();
    });

    // 헤더 높이 갱신 함수
    function updateHeaderHeight() {
        let headerHeight = $('.header-link').is(':visible') ? $('.header-link').outerHeight() + 100 : 100;
        $('body').css('margin-top', headerHeight + 'px');
    }

    // 초기 실행 및 창 크기 변경 시 적용
    updateHeaderHeight();
    $(window).on('resize', updateHeaderHeight);

    // 닫기 버튼 클릭 시 헤더 숨기고 높이 갱신
    $('.header-link button').on('click', function () {
        $('.header-link').slideUp(300, updateHeaderHeight);
    });

    // 스크롤 시 헤더 숨기기
    let lastScrollTop = 0;
    let header = $(".header");

    $(window).on("scroll", function () {
        let scrollTop = $(this).scrollTop();

        if (scrollTop > lastScrollTop) {
            header.addClass("hide");
        } else {
            header.removeClass("hide");
        }

        lastScrollTop = scrollTop;
    });



    // 섹션 2 탭메뉴
    let tabs = document.querySelectorAll('.section-02 .tab li');
    let contents = document.querySelectorAll('.section-02 .tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 탭 on 클래스 토글
            tabs.forEach(t => t.classList.remove('on'));
            tab.classList.add('on');

            // 탭 내용 보여주기
            let target = tab.getAttribute('data-tab');
            contents.forEach(content => {
                content.classList.remove('active');
                if (content.id === target) {
                    content.classList.add('active');
                }
            });
        });
    });


    // 관련 사이트 버튼 클릭 시
    $(".related-btn").click(function () {
        // 버튼에 .on 클래스 토글
        $(this).toggleClass("on");

        // 관련 사이트에 .on 클래스 토글
        $(this).siblings(".related-sites").toggleClass("on");
    });

    $(".scroll-to-top").click(function() {
        // 페이지를 최상단으로 부드럽게 스크롤
        $("html, body").animate({ scrollTop: 0 }, 500); // 500은 스크롤 애니메이션 시간 (밀리초)
    });
});
