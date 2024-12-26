document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 1s';
        section.getBoundingClientRect();
        section.style.opacity = 1;
    });
});
document.getElementById('requestForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы
    // Здесь можно добавить код для обработки данных формы, если необходимо
    alert('Форма отправлена!'); // Пример уведомления

    // Очищаем поля ввода
    this.reset(); // Сбрасываем форму
});


const testimonials = [
    {
        text: " Сотрудничество с компанией превзошло ожидания. Заказали ландшафтный проект на участке в 15 соток в Красногорске. Компания предложила несколько оригинальных решений, учла все пожелания по зонам для отдыха и цветникам.",
        image: "imgs/Отзыв1.jpg",
        author: "Иван Иванов"
    },
    {
        text: "Первый раз заказала укладку газона с автополивом на своём участке. Цена вполне устроила, и монтаж был выполнен качественно. Сотрудник компании подробно объяснил, как ухаживать за газоном зимой и подчеркнул важность удаления наледи. ",
        image: "imgs/Отзыв2.jpg",
        author: "Мария Петрова"
    },
    {
        text: " Ландшафтная команда компании превратила участок в настоящий райский уголок, в котором есть бассейн, спортплощадка, детская зона. Проект участка составлен профессионально и с вниманием к деталям. ",
        image: "imgs/Отзыв3.jpg",
        author: "Сергей Смирнов"
    },
];

let currentIndex = 0;

const updateTestimonial = () => {
    const testimonialImage = document.querySelector('.testimonial-image');
    const testimonialText = document.querySelector('.testimonial-text');
    const testimonialAuthor = document.querySelector('.testimonial-author');

    testimonialImage.src = testimonials[currentIndex].image;
    testimonialImage.alt = `Изображение автора: ${testimonials[currentIndex].author}`;
    testimonialText.textContent = testimonials[currentIndex].text;
    testimonialAuthor.textContent = testimonials[currentIndex].author;
};

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

// Инициализация слайдера
updateTestimonial();

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    if (scrollToTopBtn) { // Проверяем существование кнопки
        // Показывать/скрывать кнопку при прокрутке
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        // Плавная прокрутка наверх при клике
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Добавляем автоматическое скрытие кнопки при загрузке страницы
window.addEventListener('load', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        if (window.scrollY <= 100) {
            scrollToTopBtn.classList.remove('visible');
        }
    }
});