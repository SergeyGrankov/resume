# ДЛЯ ЧИТАЮЩЕГО ГОСТЯ!

Привет! Спасибо, что решили ознакомиться с моим проектом, я надеюсь, что вам он очень понравится. Я создавал его ради того, чтобы показать на что я способен (точнее маленькую часть из всего). В будущем я планирую расширять проект и добавлять сюда больше функционала для того, чтобы мои будущие коллеги увидели то, что они хотели увидеть. Этот проект может быть местами не идеален, однако я стараюсь делать всё, что в моих силах. Have a nice day. <3

# FOR VISITORS!

Hello! Thank you for taking the time to check out my project. I hope you really like it. I created it to showcase what I am capable of (or at least a small part of it). In the future, I plan to expand the project and add more features so that my future colleagues can see what they are looking for. This project might not be perfect in some places, but I am doing my best. Have a nice day. <3

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Архитектура

\__ **public**/ - Ассеты, которые структурируются внутри на подразделы app\modules\widgets\shared.
\__ **src**/
      |__ **app**/ - Используется исключительно для кода маршрутизации и авторизации (page.tsx, layout.tsx, loading.tsx и error.tsx), в шаблонные файлы импортируется контент.
            |__ **additional**/
            |__ **admin**/
                  |__ **login**/
                  |__ **dashboard**/
            |__ layout.tsx
            |__ page.tsx
            |__ global.scss
      |__ **modules**/ - Модули, которые содержат в себе основной контент страниц.
      |__ **widgets**/ - Компоненты, которые состоят из shared.
      |__ **shared**/ - Компоненты, которые используются в нескольких модулях или на глобальном уровне, не могут в себе использовать другие компоненты, кроме mui.
            |__ **UI**/
            |__ **styles**/
            |__ **hooks**/
            |__ **consts**/
            |__ **model**/ - бизнес логика (взаимодействие со стейтом, селекторы, экшены и тд. ...)
            |__ **config**/ - конфигурация для модуля (используется редко)
            |__ **lib**/ - это все хелперы (какие-то вспомогательные функции, которые могут использоваться внутри модуля, прим: "хуки, getFullName...")
            |__ **api**/ - Содержит файлы, отвечающие за работу с API или другими внешними источниками данных. Здесь обычно находятся функции, которые выполняют HTTP-запросы или взаимодействуют с внешними сервисами.
            |__ index.tsx - В корне каждого модуля может находиться файл index.ts
