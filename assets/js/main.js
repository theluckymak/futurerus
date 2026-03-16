;(function () {
  'use strict'

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        if (
          window.location.pathname === '/UAE.html' ||
          window.location.pathname === '/en/UAE.html'
        ) {
          // Check if it's page 1
          selectHeader.classList.add('header-scrolled-uae')
          selectHeader.classList.remove(
            'header-scrolled',
            'header-scrolled-turk'
          )
        } else if (
          window.location.pathname === '/Turkey.html' ||
          window.location.pathname === '/en/Turkey.html'
        ) {
          // Check if it's page 1
          selectHeader.classList.add('header-scrolled-turk')
          selectHeader.classList.remove(
            'header-scrolled',
            'header-scrolled-uae'
          )
        } else {
          // For all other pages
          selectHeader.classList.add('header-scrolled')
          selectHeader.classList.remove(
            'header-scrolled-uae',
            'header-scrolled-turk'
          )
        }
      } else {
        selectHeader.classList.remove(
          'header-scrolled',
          'header-scrolled-uae',
          'header-scrolled-turk'
        )
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  const translations = {
    en: {
      toggleLabel: "<i class='bi bi-translate'></i> عربي",
      '#hero-title-1': 'Welcome to <span>FutureRus</span>',
      '#hero-subtitle-1':
        'Embark on your educational journey to Russia with ease and confidence. At FutureRus, we specialize in making your transition smooth.',
      '#hero-btn-1': 'Read more!',
      '#hero-title-2': 'Study Invitations',
      '#hero-subtitle-2':
        'We guide you in obtaining scholarships that lessen the financial burden.',
      '#hero-btn-2': 'Read more!',
      '#hero-title-3': 'Travel and Accommodation',
      '#hero-subtitle-3':
        'A personal welcome and transfer from the airport to your place of residence',
      '#hero-btn-3': 'Read more!',
      '#about-title':
        'A Gateway to a World of Leading Educational Opportunities in the Heart of Russia',
      '#about-subtitle':
        'We offer you a gateway to a world of leading educational opportunities in the heart of Russia, where outstanding education, rich culture, and ancient history meet. With FutureRus, you are not alone in your educational journey – we are your partners at every step of the way.',
      '#about-p1':
        'Begin your academic path with ease and safety with FutureRus, your partner in the journey of science and knowledge to Russia. We are here to make your transition to international student life smoother, providing all forms of support to ensure a rich and fruitful experience.',
      '#about-li1':
        '<i class="ri-check-double-line"></i> We pave the way for your entry into prestigious Russian universities, accompanying you at every step to ensure you obtain the optimal acceptance according to your academic and professional aspirations.',
      '#about-li2':
        '<i class="ri-check-double-line"></i> We offer you a range of specialized invitations that open the doors to educational opportunities and enhance your academic profile with unique practical and cultural experiences during your stay in Russia.',
      '#about-li3':
        '<i class="ri-check-double-line"></i> We ensure a successful start from the first moment by providing airport reception services and making sure you reach your accommodation comfortably and safely.',
      '#about-p2':
        'We provide consultation and assistance in the process of equating your academic certificates to align with Russian educational standards, which facilitates your integration into academic or professional life with ease.',
    },
    ar: {
      toggleLabel: "<i class='bi bi-translate'></i> English",
      '#hero-title-1': 'مرحباً بكم في <span>FutureRus</span>',
      '#hero-subtitle-1':
        'ابدأ رحلتك التعليمية إلى روسيا بسهولة وثقة. نحن في FutureRus نجعل انتقالك أكثر سلاسة.',
      '#hero-btn-1': 'اقرأ المزيد',
      '#hero-title-2': 'دعوات الدراسة',
      '#hero-subtitle-2': 'نساعدك في الحصول على منح تخفف العبء المالي.',
      '#hero-btn-2': 'اقرأ المزيد',
      '#hero-title-3': 'السفر والإقامة',
      '#hero-subtitle-3': 'استقبال شخصي ونقل من المطار إلى مكان إقامتك',
      '#hero-btn-3': 'اقرأ المزيد',
      '#about-title': 'بوابة إلى أفضل الفرص التعليمية في قلب روسيا',
      '#about-subtitle':
        'نقدّم لك بوابة إلى عالم من الفرص التعليمية الرائدة في قلب روسيا، حيث يجتمع التعليم المتميز والثقافة الغنية والتاريخ العريق. مع FutureRus لست وحدك في رحلتك التعليمية، بل نحن شركاؤك في كل خطوة.',
      '#about-p1':
        'ابدأ مسارك الأكاديمي بسهولة وأمان مع FutureRus، شريكك في رحلة العلم والمعرفة إلى روسيا. نحن هنا لجعل انتقالك إلى حياة الطالب الدولي أكثر سلاسة من خلال تقديم كل أشكال الدعم لضمان تجربة غنية ومثمرة.',
      '#about-li1':
        '<i class="ri-check-double-line"></i> نمهّد لك طريق الدخول إلى الجامعات الروسية المرموقة ونرافقك في كل خطوة لضمان الحصول على القبول الأنسب لطموحاتك.',
      '#about-li2':
        '<i class="ri-check-double-line"></i> نقدّم لك مجموعة من الدعوات المتخصصة التي تفتح أبواب الفرص التعليمية وتعزز ملفك الأكاديمي بخبرات عملية وثقافية مميزة.',
      '#about-li3':
        '<i class="ri-check-double-line"></i> نضمن لك بداية ناجحة من اللحظة الأولى من خلال خدمات الاستقبال من المطار والتأكد من وصولك إلى سكنك براحة وأمان.',
      '#about-p2':
        'نوفّر الاستشارة والمساعدة في معادلة الشهادات الأكاديمية بما يتوافق مع المعايير التعليمية الروسية، مما يسهل اندماجك في الحياة الأكاديمية أو المهنية.',
    },
  }

  const applyLanguage = (lang) => {
    const nextLang = lang === 'ar' ? 'ar' : 'en'
    const dict = translations[nextLang]
    document.documentElement.lang = nextLang
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr'

    Object.keys(dict).forEach((selector) => {
      if (selector === 'toggleLabel') return
      const el = select(selector)
      if (el) el.innerHTML = dict[selector]
    })

    const toggle = select('#language-toggle')
    if (toggle) {
      toggle.innerHTML = dict.toggleLabel
      toggle.dataset.lang = nextLang
    }

    localStorage.setItem('futurerus-language', nextLang)
  }

  on('click', '#language-toggle', function (e) {
    e.preventDefault()
    const current = this.dataset.lang === 'ar' ? 'ar' : 'en'
    applyLanguage(current === 'en' ? 'ar' : 'en')
  })

  applyLanguage(localStorage.getItem('futurerus-language') || 'en')

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select('#hero-carousel-indicators')
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    index === 0
      ? (heroCarouselIndicators.innerHTML +=
          "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
          index +
          "' class='active'></li>")
      : (heroCarouselIndicators.innerHTML +=
          "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
          index +
          "'></li>")
  })

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container')
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        filter: '.filter-card', // Set initial filter to invitations
      })

      let portfolioFilters = select('#portfolio-flters li', true)

      on(
        'click',
        '#portfolio-flters li',
        function (e) {
          e.preventDefault()
          portfolioFilters.forEach(function (el) {
            el.classList.remove('filter-active')
          })
          this.classList.add('filter-active')

          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter'),
          })
        },
        true
      )
    }
  })

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox',
  })

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  })

  /**
   * Initiate portfolio details lightbox
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh',
  })

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content')
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function (direction) {
        let progress = select('.progress .progress-bar', true)
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        })
      },
    })
  }
  /**
   * Counter animation script
   */
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter')

    const animateCounter = (counter) => {
      const target = +counter.getAttribute('data-to')
      const speed = +counter.getAttribute('data-speed') || 2000 // Default speed is 2000 if not specified
      const increment = target / speed
      const appendPlus = counter.hasAttribute('data-plus') // Check if `data-plus` attribute is present

      let currentCount = 0

      const updateCounter = () => {
        currentCount += increment

        if (currentCount < target) {
          counter.textContent = Math.ceil(currentCount).toString()
          setTimeout(updateCounter, 1)
        } else {
          counter.textContent = target.toString() + (appendPlus ? '+' : '')
        }
      }

      updateCounter()
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    counters.forEach((counter) => {
      observer.observe(counter)
    })
  })

  // ... (any other code you might want to add in the future)
})() // End of the self-invoking function
