# ДЛЯ ЧИТАЮЩЕГО ГОСТЯ!
Привет! Спасибо, что решили ознакомиться с моим проектом, я надеюсь, что вам он очень понравится. Я создавал его ради того, чтобы показать на что я способен (точнее маленькую часть из всего). В будущем я планирую расширять проект и добавлять сюда больше функционала для того, чтобы мои будущие коллеги увидели то, что они хотели увидеть. Этот проект может быть местами не идеален, однако я стараюсь делать всё, что в моих силах. Have a nice day. <3

# FOR VISITORS!
Hello! Thank you for taking the time to check out my project. I hope you really like it. I created it to showcase what I am capable of (or at least a small part of it). In the future, I plan to expand the project and add more features so that my future colleagues can see what they are looking for. This project might not be perfect in some places, but I am doing my best. Have a nice day. <3

# Важное
1) Папка app в корне этого проекта нужна для поддержания архитектуры проекта feature slice design!
2) Папка public предназначена исключительно для мета-иконок. Связано с тем, что в Next js нельзя настроить их хранение в своих модулях, как картинки! Можно использовать нативные методы для загрузки этих иконок, но мне такой подход в реакте не нравится.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Архитектура

## Слой
\__ src/
    |__ app/        # (Нет слайсов) Иниц. логика (энтрипоинт прим: "провайдер, роутеры, глобальные стили, конфигурация, роутеры")
    |__ processes/  # (Опц.) Прцоессы приложения, протекающие через несколько страниц (прим: "многоэтапная регистрация")
    |__ pages/      # Страницы приложения
    |__ widgets/     # Самостоятельные и полноценные блоки для страниц
    |__ features/   # (Опц.) Обрабатываемые польз. сценарии (прим: "подписка на пользователя, лайк, дизлайк, шейр, смена языка...")
    |__ entities/   # (Опц.) Бизнес-сущности, которыми оперирует предметная область (прим: "товар, заказ, корзина, комментарий...")
    |__ shared/     # (Нет слайсов) Переиспользуемые модули, без привязки к бизнес-логике (максимально переиспользуемые модули)

## Сегменты
1) UI - наши компоненты
2) model - бизнес логика (взаимодействие со стейтом, селекторы, экшены и тд. ...)
3) lib - это все хелперы (какие-то вспомогательные функции, которые могут использоваться внутри модуля, прим: "хуки, getFullName...")
4) config - конфигурация для модуля (используется редко)
5) api - запросы на сервер
6) consts - константы
7) styles - стили, картинки