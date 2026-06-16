export const properties = {
	"text": {
		"title": "Свойства текста",
		"color": {
"start": "↓",
"name": "color",
"value": ": цвет; – задаёт цвет текста",
"example": "color: rgba(0, 30, 45, 0.5);",
"default": " (canvastext)"
		},
		"font-size": {
"start": "↓",
"name": "font-size",
"value": ": размер; – задаёт размер текста",
"example": "font-size: 25px;",
"default": " (medium)"
		},
		"font-family": {
"start": "↓",
"name": "font-family",
"value": `: шрифт; – задаёт шрифт текста
Типы шрифтов:
1. serif – шрифты с засечками, антиквенные (шрифт Times)
2. sans-serif – рубленные шрифты, шрифты без засечек или гротески (шрифт Arial)
3. cursive – курсивные шрифты
4. fantasy – декоративные шрифты
5. monospace – моноширинные шрифты, ширина каждого символа одинакова (шрифт Courier)`,
"example": "font-family: Arial, Courier New, monospace;",
"default": " (браузерное значение)"
		},
		"font-face": {
"start": "@",
"name": "font-face",
"value": " {текст из внешнего файла} – внедряет в документ шрифт из внешнего файла",
"example": `@font-face {
	font-family: "Caprica";
	src: url(fonts/caprica-script-personal-use.eot);
	src: url(fonts/caprica-script-personal-use.eot?#iefix) format("embedded-opentype"),
		url(fonts/caprica-script-personal-use.woff2) format("woff2"),
		url(fonts/caprica-script-personal-use.woff) format("woff"),
		url(fonts/caprica-script-personal-use.ttf) format("truetype"),
		url(fonts/caprica-script-personal-use.svg#caprica-script-personal-use) format("svg"),
		url(fonts/caprica-script-personal-use.otf) format("otf");
}`,
"default": ""
		},
		"font-style": {
"start": "↓",
"name": "font-style",
"value": `: начертание; – задаёт начертание текста
Начертания:
1. normal – обычное начертание
2. italic – курсивное начертание
3. oblique – наклонное начертание`,
"example": "font-style: italic;",
"default": " (normal)"
		},
		"font-variant": {
"start": "↓",
"name": "font-variant",
"value": `: значение; – управляет регистром текста
Значения:
1. normal – обычное начертание
2. small-caps – все символы становятся малыми заглавными`,
"example": "font-variant: small-caps;",
"default": " (normal)"
		},
		"text-transform": {
"start": "↓",
"name": "text-transform",
"value": `: значение; – управляет регистром текста
Значения:
1. none – ничего не меняет
2. capitalize – первый символ каждого слова будет заглавным, остальные не изменятся
3. lowercase – все символы становятся строчными
4. uppercase – все символы становятся заглавными`,
"example": "text-transform: uppercase;",
"default": " (none)"
		},
		"font-weight": {
"start": "↓",
"name": "font-weight",
"value": `: степень■жирности; – задаёт жирность текста
Степени жирности:
1. 100 – thin
2. 200 – ultralite
3. 300 – lite
4. 400 – normal
5. 500 – medium
6. 600 – semibold
7. 700 – bold
8. 800 – heavy
9. 900 – black`,
"example": "font-weight: bold;",
"default": " (normal)"
		},
		"text-shadow": {
"start": "↓",
"name": "text-shadow",
"value": `: горизонтальное■смещение вертикальное■смещение размер цвет; – добавляет тень тексту
Значения:
1. none – к элементу не применяется никакая тень`,
"example": "text-shadow: 1px 1px 2px black;",
"default": " (none)"
		},
		"text-decoration": {
"start": "",
"name": "text-decoration",
"value": `: линия стиль■линии цвет; – подчёркивает текст линией
Линии:
1. none – отменяет все эффекты
2. line-through – создаёт перечёркнутый текст
3. overline – линия над текстом
4. underline – линия под текстом
Стили линий:
1. solid – одинарная линия
2. double – двойная линия
3. dotted – точечная линия
4. dashed – пунктирная линия
5. wavy – волнистая линия`,
"example": "text-decoration: underline dotted red;",
"default": " (none solid currentcolor)"
		},
		"text-align": {
"start": "↓",
"name": "text-align",
"value": `: значение; – выравнивает текст по горизонтали
Значения:
1. left – выравнивание по левому краю
2. right – выравнивание по правому краю
3. center – выравнивание по центру
4. justify – выравнивание по ширине`,
"example": "text-align: center;",
"default": " (start)"
		},
		"text-indent": {
"start": "↓",
"name": "text-indent",
"value": ": размер; – задаёт размер красной строки",
"example": "text-indent: 10px;",
"default": " (0)"
		},
		"letter-spacing": {
"start": "↓",
"name": "letter-spacing",
"value": ": размер; – задаёт интервал между символами",
"example": "letter-spacing: 5px;",
"default": " (normal)"
		},
		"word-spacing": {
"start": "↓",
"name": "word-spacing",
"value": ": размер; – задаёт интервал между словами",
"example": "word-spacing: 6px;",
"default": " (normal)"
		},
		"line-height": {
"start": "↓",
"name": "line-height",
"value": ": размер; – задаёт межстрочный интервал",
"example": "line-height: 1.5;",
"default": " (normal)"
		},
		"font": {
"start": "↓",
"name": "font",
"value": ": font-style font-variant font-weight font-size/line-height font-family; – сокращённая запись",
"example": "font: italic normal bold 12px/1.2px Tahoma, Arial, sans-serif;",
"default": ""
		},
		"overflow-wrap": {
"start": "↓",
"name": "overflow-wrap",
"value": `: значение; – управляет переносом слов на следующую строку
Значения:
1. normal – слова не обрываются и переносятся целиком
2. break-word – слова, которые не помещаются в строку, обрываются и переносятся`,
"example": "overflow-wrap: break-word;",
"default": " (normal)"
		},
		"text-overflow": {
"start": "",
"name": "text-overflow",
"value": `: значение; – управляет свойствами обрезки текста, если он не помещается в заданную область
Значения:
1. clip – текст обрезается по размеру заданной области
2. ellipsis – текст обрезается по размеру заданной области, и в конце строки добавляется многоточие`,
"example": "text-overflow: ellipsis;",
"default": " (clip)"
		},
		"word-break": {
"start": "↓",
"name": "word-break",
"value": `: значение; – управляет переносом слов на новую строку в местах, где обычно нет пробелов (например, в длинных URL)
Значения:
1. normal – переносы по умолчанию
2. break-all – разрешает разрывать любое слово в любом месте, если оно не помещается
3. keep-all – запрещает разрывать слова (полезно для CJK-текстов)`,
"example": "word-break: break-all;",
"default": " (normal)"
		},
		"hyphens": {
"start": "↓",
"name": "hyphens",
"value": `: значение; – управляет расстановкой дефисов для переноса слов
Значения:
1. none – слова не переносятся с помощью дефиса
2. manual – дефисы ставятся только там, где в тексте вставлены специальные символы переноса (&shy;)
3. auto – браузер сам расставляет дефисы согласно правилам языка`,
"example": "hyphens: auto;",
"default": " (manual)"
		},
		"white-space": {
"start": "↓",
"name": "white-space",
"value": `: значение; – управляет пробелами между словами
Значения:
1. normal – ничего не меняет, строки переносятся, учитываются теги &lt;br>, не учитываются символы новой строки (Enter) и табуляция
2. nowrap – запрещает перенос строки, текст может выйти за края объекта
3. pre – строки переносятся только с помощью тега &lt;br> и символов новой строки (Enter), табуляция учитывается
4. pre-wrap – строки переносятся, учитываются теги &lt;br>, символы новой строки (Enter) и табуляция
5. pre-line – строки переносятся, учитываются только теги &lt;br> и символы новой строки (Enter), табуляция не учитывается
6. break-spaces – идентично pre-wrap, кроме некоторых особенностей`,
"example": "white-space: nowrap;",
"default": " (normal)"
		},
		"columns": {
"start": "",
"name": "columns",
"value": ": кол-во размер; – устанавливает количество и размер колонок в тексте",
"example": "columns: 4 25%;",
"default": " (auto auto)"
		},
		"column-gap": {
"start": "",
"name": "column-gap",
"value": ": размер; – устанавливает интервал между колонками",
"example": "column-gap: 20px;",
"default": " (normal)"
		},
		"column-rule": {
"start": "",
"name": "column-rule",
"value": `: толщина стиль цвет; – добавляет между колонками разделительную линию
Стили:
1. solid – сплошная линия
2. dotted – линия из точек
3. dashed – пунктирная линия`,
"example": "column-rule: 1px solid gray;",
"default": " (medium solid currentcolor)"
		}
	},
	"elements": {
		"title": "Свойства элементов",
		"width": {
"start": "",
"name": "width",
"value": `: ширина; – задаёт ширину блочных и некоторых строчных (img) тегов
Подобные свойства:
1. min-width – задаёт минимальную ширину
2. max-width – задаёт максимальную ширину`,
"example": "width: 150px;",
"default": " (auto)"
		},
		"height": {
"start": "",
"name": "height",
"value": `: высота; – задаёт высоту блочных и некоторых строчных (img) тегов
Подобные свойства:
1. min-height – задаёт минимальную высоту
2. max-height – задаёт максимальную высоту`,
"example": "height: 200px;",
"default": " (auto)"
		},
		"margin": {
"start": "",
"name": "margin",
"value": `: размер; – задаёт внешний отступ элемента, свойство может быть как положительным, так и отрицательным
Краткая запись:
1. margin: со■всех■сторон;
2. margin: сверху■снизу справа■слева;
3. margin: сверху справа■слева снизу;
4. margin: сверху справа снизу слева;
Подобные свойства:
1. margin-top – внешний отступ сверху
2. margin-right – внешний отступ справа
3. margin-bottom – внешний отступ снизу
4. margin-left – внешний отступ слева`,
"example": "margin: 10px;",
"default": " (0)"
		},
		"padding": {
"start": "",
"name": "padding",
"value": `: размер; – задаёт внутренний отступ элемента, свойство может быть как положительным, так и отрицательным
Краткая запись:
1. padding: со■всех■сторон;
2. padding: сверху■снизу справа■слева;
3. padding: сверху справа■слева снизу;
4. padding: сверху справа снизу слева;
Подобные свойства:
1. padding-top – внутренний отступ сверху
2. padding-right – внутренний отступ справа
3. padding-bottom – внутренний отступ снизу
4. padding-left – внутренний отступ слева`,
"example": "padding: 25px;",
"default": " (0)"
		},
		"box-sizing": {
"start": "",
"name": "box-sizing",
"value": `: значение; – изменяет алгоритм расчёта ширины и высоты элемента
Значения:
1. content-box – свойства width и height задают ширину и высоту контента и не включают в себя значения полей (padding), границ (border) и отступов (margin)
2. padding-box – свойства width и height задают ширину и высоту контента и включают в себя значения полей (padding), но не границ (border) и отступов (margin)
3. border-box – свойства width и height задают ширину и высоту контента и включают в себя только значения полей (padding), границ (border), но не отступы (margin)`,
"example": "box-sizing: border-box;",
"default": " (content-box)"
		},
		"user-select": {
"start": "",
"name": "user-select",
"value": `: значение; – управляет выделением текста
Значения:
1. auto – текст веделяется по умолчанию
2. text – текст выделяется, как текст
3. all – выделяется сразу весь элемент
4. contain – выделение будет ограничено границами элемента
5. none – запрещает выделять текст`,
"example": "user-select: none;",
"default": " (auto)"
		},
		"overflow": {
"start": "",
"name": "overflow",
"value": `: значение; – управляет отображением полос прокрутки
Значения:
1. visible – отображается все содержание элемента, даже за его пределами
2. hidden – отображается только область внутри элемента, остальное скрывается
3. clip – идентично hidden
4. auto – полосы прокрутки добавляются только при необходимости
5. scroll – всегда добавляются полосы прокрутки
Подобные свойства:
1. overflow-x – управляет отображением вертикальной полосы прокрутки
2. overflow-y – управляет отображением горизонтальной полосы прокрутки`,
"example": "overflow: auto;",
"default": " (visible)"
		},
		"box-shadow": {
"start": "",
"name": "box-shadow",
"value": `: сдвиг■по■горизонтали сдвиг■по■вертикали радиус расстояние; – добавляет тень к элементу
Значения:
1. none – к элементу не применяется никакая тень
2. inset – тень становится внутри объекта`,
"example": "box-shadow: inset 0 0 10px black;",
"default": " (none)"
		},
		"opacity": {
"start": "",
"name": "opacity",
"value": ": степень■прозрачности; – задаёт степень прозрачности элемента",
"example": "opacity: 50%;",
"default": " (1)"
		},
		"resize": {
"start": "",
"name": "resize",
"value": `: значение; – управляет возможностью изменения размеров элемента пользователем
Значения:
1. none – размеры элемента нельзя изменять
2. both – размеры можно изменять
3. horizontal – размеры можно изменять только по горизонтали
4. vertical – размеры можно изменять только по вертикали`,
"example": "resize: both;",
"default": " (none)"
		},
		"display": {
"start": "",
"name": "display",
"value": `: значение; – задаёт, как элемент должен быть показан в документе
Значения:
1. inline – отображает строчный элемент
2. block – отображает блочный элемент
3. contents – потомки элемента становятся непосредственно на его место, будто они – потомки его родителя, а сам элемент исчезает
4. flex – отображает элемент в виде flex-контейнера в блочном уровне
5. grid – отображает элемент в виде grid-контейнера в блочном уровне
6. inline-block – отображает элемент в виде блочного контейнера в строчном уровне
7. inline-flex – отображает элемент в виде flex-контейнера в строчном уровне
8. inline-grid – отображает элемент в виде grid-контейнера в строчном уровне
9. inline-table – отображает элемент в виде таблицы строчного уровня. Реагирует также, как html-элемент &lt;table>, но как строчный блок, а не элемент блочного уровня. Внутри табличного блока находится контекст блочного уровня
10. list-item – элемент реагирует, как html-элемент &lt;li>
11. run-in – отображает элемент, как блочный или строчный в зависимости от контекста
12. table – элемент реагирует, как html-элемент &lt;table>
13. table-caption – элемент реагирует, как html-элемент &lt;caption>
14. table-column-group – элемент реагирует, как html-элемент &lt;colgroup>
15. table-header-group – элемент реагирует, как html-элемент &lt;thead>
16. table-footer-group – элемент реагирует, как html-элемент &lt;tfoot>
17. table-row-group – элемент реагирует, как html-элемент &lt;tbody>
18. table-cell – элемент реагирует, как html-элемент &lt;td>
19. table-column – элемент реагирует, как html-элемент &lt;col>
20. table-row – элемент реагирует, как html-элемент &lt;tr>
21. none – элемент не отображается`,
"example": "display: block;",
"default": " (inline)"
		},
		"visibility": {
"start": "↓",
"name": "visibility",
"value": `: значение; – управляет отображением элемента
Значения:
1. visible – элемент виден
2. hidden – элемент становится невидимым
3. collapse – строки, колонки или ячейки таблицы исчезают, таблица перестраивается по новой`,
"example": "visibility: hidden;",
"default": " (visible)"
		},
		"float": {
"start": "",
"name": "float",
"value": `: значение; – устанавливает, по какой стороне будет выравниваться элемент, при этом остальные элементы будут обтекать его с других сторон
Значения:
1. none – не выравнивает элемент
2. left – выравнивает элемент по левому краю, а все остальные элементы обтекают его по правой стороне
3. right – выравнивает элемент по правому краю, а все остальные элементы обтекают его по левой стороне`,
"example": "float: left;",
"default": " (none)"
		},
		"clear": {
"start": "",
"name": "clear",
"value": `: значение; – устанавливает, с какой стороны элемента запрещено его обтекание другими элементами
Если установлено обтекание элемента float, свойство clear отменяет его действие.
Значения:
1. none – отменяет действие данного свойства
2. left – отменяет обтекание с левой стороны элемента
3. right – отменяет обтекание с правой стороны элемента
4. both – отменяет обтекание элемента одновременно с правого и левого края`,
"example": "clear: both;",
"default": " (none)"
		},
		"object-fit": {
"start": "",
"name": "object-fit",
"value": `: значение; – устанавливает соотношение сторон элементов (img, video), если у них задана ширина или высота
Значения:
1. fill – размер элемента соответствует заданному, пропорции исходного изображения игнорируются
2. contain – элемент масштабируется, сохраняя пропорции, так, чтобы целиком поместиться в заданную область
3. cover – элемент масштабируется, сохраняя пропорции, и обрезается так, чтобы полностью заполнить заданную область
4. scale-down – размер элемента соответствуют меньшему из размеров при указании значения none или contain
5. none – размер элемента остаётся исходным, заданный размер игнорируется`,
"example": "object-fit: cover;",
"default": " (fill)"
		},
		"aspect-ratio": {
"start": "",
"name": "aspect-ratio",
"value": ": ширина/высота; – задаёт предпочитаемое соотношение сторон элемента, помогая браузеру заранее рассчитать его размеры",
"example": "aspect-ratio: 16 / 9;",
"default": " (auto)"
		},
		"pointer-events": {
"start": "↓",
"name": "pointer-events",
"value": `: значение; – управляет тем, как элемент реагирует на указатель мыши (клики, наведения)
Значения:
1. auto – элемент ведёт себя как обычно
2. none – элемент игнорирует все действия указателя мыши, события проходят "насквозь" к элементу под ним`,
"example": "pointer-events: none;",
"default": " (auto)"
		},
		"caret-color": {
"start": "↓",
"name": "caret-color",
"value": `: цвет; – задаёт цвет каретки в любом редактируемом элементе (форме)
Атрибут contenteditable даёт возможность изменения элемента пользователем`,
"example": "caret-color: green;",
"default": " (auto)"
		},
		"cursor": {
"start": "↓",
"name": "cursor",
"value": `: значение; – устанавливает соотношение сторон элементов (img, video), если у них задана ширина или высота
Значения:
1. auto – браузер сам определяет курсор
2. default – курсор по умолчанию
3. none – указывает на отсутствие курсора для элемента
4. context-menu – наличие контекстного меню
5. help – наличие справочной информации
6. pointer – курсор-указатель
7. progress – указывает, что программа работает или находится в процессе
8. wait – указывает, что нужно дождаться завершения работы программы
9. cell – курсор укажет, если будет возможность выбрать ячейки
10. crosshair – курсор в виде большого знака "+"
11. text – текстовый курсор
12. url(адрес картинки) – ваш собственный курсор. Поддерживаются файлы .cur и .ani
13. vertical-text – курсор указывает на наличие вертикального текста
14. alias – курсор указывает, что есть возможность создать псевдоним чего-то
15. copy – курсор указывает, что есть возможность копировать что-то
16. move – курсор указывает, что есть возможность переместить что-то
17. no-drop – курсор указывает, что нельзя перетащить и опустить элемент
18. not-allowed – курсор указывает, что невозможно выполнить запрашиваемое действие
19. all-scroll – курсор укажет, если будет возможность прокручивания в каком-либо направлении
20. col-resize – курсор указывает, что размер колонки может быть изменен по горизонтали
21. row-resize – курсор указывает, что размер строки может быть изменен по вертикали
22. n-resize – курсор указывает, что размер блока может быть растянут вверх
23. s-resize – курсор указывает, что размер блока может быть растянут вниз
24. e-resize – курсор указывает, что размер блока может быть растянут вправо
25. w-resize – курсор указывает, что размер блока может быть растянут влево
26. ns-resize – курсор указывает на двунаправленное изменение размера курсора
27. ew-resize – курсор указывает на двунаправленное изменение размера курсора
28. ne-resize – курсор указывает, что размер блока может быть растянут вверх и вправо
29. nw-resize – курсор указывает, что размер блока может быть растянут вверх и влево
30. se-resize – курсор указывает, что размер блока может быть растянут вниз и вправо
31. sw-resize – курсор указывает, что размер блока может быть растянут вниз и влево
32. nesw-resize – курсор указывает на двунаправленное изменение размера курсора
33. nwse-resize – курсор указывает на двунаправленное изменение размера курсора
34. zoom-in – курсор указывает, что можно увеличить размер элемента
35. zoom-out – курсор указывает что можно уменьшить размер элемента
36. grab – курсор указывает на захват чего-то
37. grabbing – курсор указывает на захват чего-то`,
"example": "cursor: wait;",
"default": " (auto)"
		}
	},
	"border": {
		"title": "Свойства границ",
		"border": {
"start": "",
"name": "border",
"value": ": толщина стиль цвет; – задаёт толщину, стиль и цвет внутренней границы элемента",
"example": "border: 1px solid #000;",
"default": ` (medium none currentcolor)
Подобные свойства:
1. border-top – задаёт толщину стиль цвет верхней границы элемента
2. border-right – задаёт толщину стиль цвет правой границы элемента
3. border-bottom – задаёт толщину стиль цвет нижней границы элемента
4. border-left – задаёт толщину стиль цвет левой границы элемента`
		},
		"border-radius": {
"start": "",
"name": "border-radius",
"value": `: размер■радиуса; – задаёт радиус скругления углов блока
Краткая запись:
1. border-radius: со■всех■углов;
2. border-radius: сверху-слева■снизу-справа сверху-справа■снизу-слева;
3. border-radius: сверху-слева снизу-слева■сверху-справа снизу-справа;
4. border-radius: сверху-слева сверху-справа снизу-справа снизу-слева;
5. border-radius: размер■по■горизонтали/размер■по■вертикали;`,
"example": "border-radius: 50%;",
"default": " (0)"
		},
		"border-image-source": {
"start": "",
"name": "border-image-source",
"value": `: градиент■или■url("адрес изображения"); – устанавливает изображение или градиент для границы элемента`,
"example": `border-image-source: url("img/border.png");`,
"default": " (none)"
		},
		"border-image-width": {
"start": "",
"name": "border-image-width",
"value": `: толщина; – задаёт толщину границы элемента
Краткая запись:
1. border-image-width: со■всех■сторон;
2. border-image-width: сверху■снизу справа■слева;
3. border-image-width: сверху справа■слева снизу;
4. border-image-width: сверху справа снизу слева;`,
"example": "border-image-width: 10px;",
"default": " (1)"
		},
		"border-image-slice": {
"start": "",
"name": "border-image-slice",
"value": `: размер размер размер; – делит изображение на части по указанным размерам
Краткая запись:
1. border-image-slice: со■всех■сторон;
2. border-image-slice: сверху■снизу справа■слева;
3. border-image-slice: сверху справа■слева снизу;
4. border-image-slice: сверху справа снизу слева;`,
"example": "border-image-slice: 10;",
"default": " (100%)"
		},
		"border-image-repeat": {
"start": "",
"name": "border-image-repeat",
"value": `: значение; – задаёт повтор изображения
Значения:
1. stretch – картинка растягивается
2. repeat – картинка повторяется
3. round – картинка повторяется и масштабируется, чтобы рамки состояла из целого числа изображений
4. space – то же, что и repeat
Краткая запись:
1. border-image-repeat: со■всех■сторон;
2. border-image-repeat: сверху■снизу справа■слева;
3. border-image-repeat: сверху справа■слева снизу;
4. border-image-repeat: сверху справа снизу слева;`,
"example": "border-image-repeat: round;",
"default": " (stretch)"
		},
		"border-image-outset": {
"start": "",
"name": "border-image-outset",
"value": `: размер■отступа; – задаёт размер отступа границы от элемента
Краткая запись:
1. border-image-outset: со■всех■сторон;
2. border-image-outset: сверху■снизу справа■слева;
3. border-image-outset: сверху справа■слева снизу;
4. border-image-outset: сверху справа снизу слева;`,
"example": "border-image-outset: 5px;",
"default": " (0)"
		},
		"border-image": {
"start": "",
"name": "border-image",
"value": `: border-image-source border-image-width border-image-slice border-image-repeat border-image-outset; – сокращённая запись`,
"example": `border-image: url("img/border.jpg") 15px 15 30 15 round 5px;`,
"default": " (none 1 100% stretch 0)"
		},
		"outline": {
"start": "",
"name": "outline",
"value": `: толщина стиль цвет; – задаёт толщину, стиль и цвет внешней границы элемента`,
"example": "outline: 1px solid #000;",
"default": " (medium none auto)"
		},
		"outline-offset": {
"start": "",
"name": "outline-offset",
"value": `: размер■отступа; – задаёт размер отступа внешней границы от границы элемента`,
"example": "outline-offset: 5px;",
"default": " (0)"
		}
	},
	"background": {
		"title": "Свойства фона",
		"background-color": {
"start": "",
"name": "background-color",
"value": ": цвет; – задаёт цвет фона элемента",
"example": "background-color: mediumaquamarine;",
"default": " (transparent)"
		},
		"background-image": {
"start": "",
"name": "background-image",
"value": `: градиент■или■url("адрес картинки"); – устанавливает фоновое изображение или градиент для элемента`,
"example": `background-image: url("https://apple.com");`,
"default": " (none)"
		},
		"background-position": {
"start": "",
"name": "background-position",
"value": `: координаты; – задаёт начальное положение фонового изображения (background-image)
Подобные свойства:
1. background-position-x – начальное положение фонового изображения по оси x
2. background-position-y – начальное положение фонового изображения по оси y`,
"example": "background-position: 25px 30px;",
"default": " (0% 0%)"
		},
		"background-size": {
"start": "",
"name": "background-size",
"value": `: значение■или■размеры; – масштабирует фоновое изображение согласно заданным размерам
Значения:
1. auto – если задано одновременно для ширины и высоты (auto auto), размеры фона остаются исходными; если только для одной стороны картинки (100px auto), то размер вычисляется автоматически исходя из пропорций картинки
2. cover – масштабирует изображение с сохранением пропорций так, чтобы его ширина или высота равнялась ширине или высоте блока
3. contain – масштабирует изображение с сохранением пропорций таким образом, чтобы картинка целиком поместилась внутрь блока`,
"example": "background-size: contain;",
"default": " (auto auto)"
		},
		"background-repeat": {
"start": "",
"name": "background-repeat",
"value": `: значение; – задаёт повторение фонового изображения (background-image)
Значения:
1. repeat – фоновое изображение повторяется по горизонтали и вертикали
2. repeat-x – фоновый рисунок повторяется только по горизонтали
3. repeat-y – фоновый рисунок повторяется только по вертикали
4. space – изображение повторяется столько раз, чтобы полностью заполнить область; если это не удаётся, между картинками добавляется пустое пространство
5. round – изображение повторяется столько раз, чтобы в области поместилось целое число рисунков; если это не удаётся сделать, то фоновые рисунки масштабируются
6. no-repeat – устанавливает одно фоновое изображение без повторений, положение которого определяется свойством background-position (по умолчанию в левом верхнем углу)`,
"example": "background-repeat: repeat;",
"default": " (repeat)"
		},
		"background-attachment": {
"start": "",
"name": "background-attachment",
"value": `: значение; – устанавливает, будет ли прокручиваться фоновое изображение вместе с содержимым элемента
Значения:
1. scroll – позволяет перемещаться фону вместе с содержимым
2. fixed – делает фоновое изображение элемента неподвижным
3. local – фон фиксируется с учётом поведения элемента. Если элемент имеет прокрутку, то фон будет прокручиваться вместе с содержимым, но фон выходящий за рамки элемента остаётся на месте`,
"example": "background-attachment: fixed;",
"default": " (scroll)"
		},
		"background-clip": {
"start": "",
"name": "background-clip",
"value": `: значение; – устанавливает, где будет отображаться фон
Значения:
1. border-box – фон отображается до внешнего края границы элемента
2. padding-box – фон отображается до внутреннего края границы элемента
3. content-box – фон отображается только внутри контента`,
"example": "background-clip: border-box;",
"default": " (border-box)"
		},
		"background-origin": {
"start": "",
"name": "background-origin",
"value": `: значение; – задаёт начальную позицию фонового изображения (background-image)
Значения:
1. border-box – фон начинается от внешнего края границы
2. padding-box – фон начинается от внутреннего края границы
3. content-box – фон начинается от края контента`,
"example": "background-origin: content-box;",
"default": " (padding-box)"
		},
		"background": {
"start": "",
"name": "background",
"value": ": background-color background-image background-position/background-size background-repeat background-attachment; – сокращённая запись",
"example": `background: #9cdaff url("img/bg.jpg") center/50% 50% fixed, aquamarine url("img/bg1.jpg") left/25% 25% no-repeat;`,
"default": " (transparent none 0% 0%/auto auto repeat scroll)"
		}
	},
	"position": {
		"title": "Позиционирование",
		"position": {
"start": "",
"name": "position",
"value": `: значение; – задаёт способ позиционирования элемента относительно окна браузера или других объектов, когда элемент вырывается из базовой сетки сайта и переходит на другой уровень элементов
Значения:
1. static – значение по умолчанию, элемент не позиционируется
2. relative – элемент позиционируется как static, но его можно двигать относительно этого положения
3. absolute – элемент позиционируется относительно ближайшего родителя с relative, absolute, fixed или sticky
4. fixed – элемент позиционируется относительно окна браузера
5. sticky – элемент позиционируется как static но когда верхняя граница элемента будет находиться на расстоянии, указанном в параметре top, от верхней границы окна браузера (либо указанном в параметре bottom от нижней), он останется в этом положении относительно окна до тех пор пока его нижняя граница не упрется в другой sticky элемент или конец родительского элемента`,
"example": "position: absolute;",
"default": " (static)"
		},
		"top": {
"start": "",
"name": "top",
"value": `: размер; – задаёт размер верхнего отступа для позиционируемого элемента`,
"example": "top: 50px;",
"default": " (auto)"
		},
		"right": {
"start": "",
"name": "right",
"value": `: размер; – задаёт размер правого отступа для позиционируемого элемента`,
"example": "right: 20px;",
"default": " (auto)"
		},
		"bottom": {
"start": "",
"name": "bottom",
"value": `: размер; – задаёт размер нижнего отступа для позиционируемого элемента`,
"example": "bottom: 30%;",
"default": " (auto)"
		},
		"left": {
"start": "",
"name": "left",
"value": `: размер; – задаёт размер левого отступа для позиционируемого элемента`,
"example": "left: 230px;",
"default": " (auto)"
		},
		"z-index": {
"start": "",
"name": "z-index",
"value": `: значение; – задаёт наложение элементов по оси Z (0 – элемент снизу, 1 – элемент сверху) для элемента со значениями позиционирования relative, absolute и fixed, можно указывать любое значение`,
"example": "z-index: 100;",
"default": " (auto)"
		}
	},
	"flex-containers": {
		"title": "Флекс-контейнеры",
		"flex-wrap": {
"start": "",
"name": "flex-wrap",
"value": `: значение; – разрешает flex-элементам перемещаться на следующую строку в flex-контейнере
Значения:
1. nowrap – flex-элементы не могут перемещаться на следующую строку в flex-контейнере
2. wrap – flex-элементы смогут перемещаться на следующую строку в flex-контейнере
3. wrap-reverse – flex-элементы смогут в обратном порядке перемещаться на следующую строку в flex-контейнере`,
"example": "flex-wrap: wrap;",
"default": " (nowrap)"
		},
		"flex-direction": {
"start": "",
"name": "flex-direction",
"value": `: значение; – задаёт направление расположения flex-элементов в flex-контейнере
Значения:
1. row – все flex-элементы располагаются по горизонтали слева направо в flex-контейнере
2. row-reverse – все flex-элементы располагаются по горизонтали справа налево в flex-контейнере
3. column – все flex-элементы располагаются по вертикали сверху вниз в flex-контейнере
4. column-reverse – все flex-элементы располагаются по вертикали снизу вверх в flex-контейнере`,
"example": "flex-direction: column;",
"default": " (row)"
		},
		"flex-flow": {
"start": "",
"name": "flex-flow",
"value": ": flex-direction flex-wrap; – сокращённая запись",
"example": "flex-flow: row nowrap;",
"default": " (row nowrap)"
		},
		"justify-content": {
"start": "",
"name": "justify-content",
"value": `: значение; – задаёт выравнивание вдоль основной оси
Значения:
1. flex-start – flex-элементы прижимаются к началу основной оси
2. flex-end – flex-элементы прижимаются к концу основной оси
3. center – flex-элементы располагаются по центру основной оси
4. space-between – flex-элементы располагаются равномерно по основной оси, первый элемент находится в начале оси, последний – в конце
5. space-around – flex-элементы располагаются равномерно по основной оси, к каждому добавляется пространство слева и справа, равное половине расстояния между элементами
6. space-evenly – flex-элементы располагаются равномерно по основной оси, к каждому добавляется пространство слева и справа, равное расстоянию между элементами`,
"example": "justify-content: center;",
"default": " (normal)"
		},
		"align-items": {
"start": "",
"name": "align-items",
"value": `: значение; – задаёт выравнивание вдоль поперечной оси
Значения:
1. stretch – flex-элементы растягиваются на весь размер поперечной оси flex-контейнера
2. flex-start – flex-элементы прижимаются к началу поперечной оси
3. flex-end – flex-элементы прижимаются к концу поперечной оси
4. center – flex-элементы располагаются по центру поперечной оси
5. baseline – flex-элементы располагаются по базовой линии`,
"example": "align-items: flex-start;",
"default": " (normal)"
		},
		"align-content": {
"start": "",
"name": "align-content",
"value": `: значение; – задаёт выравнивание строк flex-элементов вдоль поперечной оси (работает только при flex-wrap: wrap)
Значения:
1. stretch – строки растягиваются на весь размер поперечной оси
2. flex-start – строки прижимаются к началу поперечной оси
3. flex-end – строки прижимаются к концу поперечной оси
4. center – строки располагаются по центру поперечной оси
5. space-between – строки распределяются равномерно, первая в начале, последняя в конце
6. space-around – строки распределяются равномерно с равным расстоянием между ними
7. space-evenly – строки распределяются равномерно с равным расстоянием между собой и краями`,
"example": "align-content: center;",
"default": " (normal)"
		},
		"gap": {
"start": "",
"name": "gap",
"value": `: размер■или■размер размер; – задаёт отступы между flex- или grid-элементами (сокращённая запись для row-gap и column-gap)`,
"example": "gap: 20px 10px;",
"default": " (normal)"
		}
	},
	"flex-elements": {
		"title": "Флекс-элементы",
		"order": {
"start": "",
"name": "order",
"value": ": номер■flex-элемента; – управляет порядком, в котором располагаются flex-элементы внутри flex-контейнера",
"example": "order: 1;",
"default": " (0)"
		},
		"align-self": {
"start": "",
"name": "align-self",
"value": `: значение; – переопределяет для конкретного flex-элемента выравнивание вдоль поперечной оси
Значения:
1. auto – flex-элементы растягиваются на весь размер поперечной оси flex-контейнера
2. flex-start – flex-элементы прижимаются к началу поперечной оси
3. flex-end – flex-элементы прижимаются к концу поперечной оси
4. center – flex-элементы располагаются по центру поперечной оси`,
"example": "align-self: flex-end;",
"default": " (auto)"
		},
		"flex-basis": {
"start": "",
"name": "flex-basis",
"value": ": размер; – задаёт размер элемента по умолчанию, до распределения оставшегося пространства",
"example": "flex-basis: 300px;",
"default": " (auto)"
		},
		"flex-grow": {
"start": "",
"name": "flex-grow",
"value": `: значение; – управляет возможностью элемента увеличиваться в размере, заполняя весь flex-контейнер
Значения:
1. 0 – запрещено увеличиваться в размере
2. 1 – разрешено увеличиваться в размере`,
"example": "flex-grow: 1;",
"default": " (0)"
		},
		"flex-shrink": {
"start": "",
"name": "flex-shrink",
"value": `: значение; – управляет возможностью элемента уменьшаться в размере, заполняя весь flex-контейнер
Значения:
1. 0 – запрещено уменьшаться в размере
2. 1 – разрешено уменьшаться в размере`,
"example": "flex-shrink: 0;",
"default": " (1)"
		},
		"flex": {
"start": "",
"name": "flex",
"value": ": flex-grow flex-shrink flex-basis; – сокращённая запись",
"example": "flex: 1 0 auto;",
"default": " (0 1 auto)"
		}
	},
	"scrollbar": {
		"title": "Свойства скроллбара",
		"scrollbar-width": {
"start": "",
"name": "scrollbar-width",
"value": `: значение; – задаёт ширину полосы прокрутки (скроллбара)
Не работает в WebView на Android и в Safari
Значения:
1. auto – ширина скроллбара по умолчанию
2. thin – боллее тонкая полоса прокрутки
3. none – полоса прокрутки исчезнет, однако элемент по-прежнему будет прокручиваться`,
"example": "scrollbar-width: none;",
"default": " (auto)"
		},
		"scrollbar-color": {
"start": "↓",
"name": "scrollbar-color",
"value": `: значение■или■цвет значение■или■цвет; – задаёт цвет ползунка и дорожки
Не работает в WebView на Android и в Safari
Значения:
1. auto – цвет скроллбара по умолчанию`,
"example": "scrollbar-color: lime green;",
"default": " (auto)"
		},
		"-webkit-scrollbar": {
"start": "элемент::",
"name": "-webkit-scrollbar",
"value": `{свойства} – свойства применяются ко всей полосе прокрутки (скроллбару)
Не работает в FireFox`,
"example": `::-webkit-scrollbar {
	background: blue;
}`,
"default": ""
		},
		"-webkit-scrollbar-track": {
"start": "элемент::",
"name": "-webkit-scrollbar-track",
"value": `{свойства} – свойства применяются только к полосе прокрутки (дорожке)
Не работает в Safari на мобильных устройствах и в FireFox`,
"example": `.object::-webkit-scrollbar-track {
	width: 20px;
}`,
"default": ""
		},
		"-webkit-scrollbar-track-piece": {
"start": "элемент::",
"name": "-webkit-scrollbar-track-piece",
"value": `{свойства} – свойства применяются только к видимой части дорожки, не занятой ползунком
Не работает в Safari на мобильных устройствах и в FireFox`,
"example": `p::-webkit-scrollbar-track-piece {
	opacity: 0.5;
}`,
"default": ""
		},
		"-webkit-scrollbar-thumb": {
"start": "элемент::",
"name": "-webkit-scrollbar-thumb",
"value": `{свойства} – свойства применяются к перетаскиваемому ползунку прокрутки
Не работает в Safari на мобильных устройствах и в FireFox`,
"example": `button::-webkit-scrollbar-thumb {
	border: 3px solid #fff;
}`,
"default": ""
		},
		"-webkit-scrollbar-button": {
"start": "элемент::",
"name": "-webkit-scrollbar-button",
"value": `{свойства} – свойства применяются к кнопкам сверху и снизу дорожки, прокручивающие по одной строке
Не работает в Safari на мобильных устройствах и в FireFox`,
"example": `*::-webkit-scrollbar-button {
	height: 17px;
}`,
"default": ""
		},
		"-webkit-scrollbar-corner": {
"start": "элемент::",
"name": "-webkit-scrollbar-corner",
"value": `{свойства} – свойства применяются к уголку на скроллбаре, где пересекаются вертикальная и горизонтальная дорожки
Работает только с теми элементами, чьи размеры пользователь может изменять (cвойство resizer), не работает в Safari на мобильных устройствах и в FireFox`,
"example": `#view::-webkit-scrollbar-corner {
	background: pink;
}`,
"default": ""
		},
		"-webkit-resizer": {
"start": "элемент::",
"name": "-webkit-resizer",
"value": `{свойства} – свойства применяются кнопке изменения размеров элемента в уголке на скроллбаре, где пересекаются вертикальная и горизонтальная дорожки
Работает только с теми элементами, чьи размеры пользователь может изменять (cвойство resizer), не работает в FireFox`,
"example": `div::-webkit-resizer {
	border-bottom: 10px solid #000;
}`,
"default": ""
		},
		"horizontal": {
"start": "элемент:",
"name": "horizontal",
"value": `{свойства} – псевдокласс определяющий, что свойства применятся только к горизонтальному элементу
Работает только с элементами скроллбара webkit`,
"example": `div::-webkit-scrollbar-track:horizontal {
	box-shadow: inset 0 1px 10px green;
}`,
"default": ""
		},
		"vertical": {
"start": "элемент:",
"name": "vertical",
"value": `{свойства} – псевдокласс определяющий, что свойства применятся только к горизонтальному элементу
Работает только с элементами скроллбара webkit`,
"example": `div::-webkit-scrollbar-thumb:vertical {
	background: #118;
}`,
"default": ""
		},
		"start": {
"start": "элемент:",
"name": "start",
"value": `{свойства} – псевдокласс определяющий, что свойства применятся к элементу только до ползунка прокрутки (идентично decrement)
Работает только с элементами скроллбара webkit`,
"example": `div::-webkit-scrollbar-thumb:start {
	background: red;
}`,
"default": ""
		},
		"end": {
"start": "элемент:",
"name": "end",
"value": `{свойства} – псевдокласс определяющий, что свойства применятся к элементу только после ползунка прокрутки (идентично increment)
Работает только с элементами скроллбара в webkit`,
"example": `div::-webkit-scrollbar-thumb:end {
	box-shadow: 5px 5px 5px grey;
}`,
"default": ""
		},
		"window-inactive": {
"start": "элемент:",
"name": "window-inactive",
"value": `{свойства} – псевдокласс определяющий, что свойства применятся только тогда, когда окно не активно (находится сзади)
Работает только с элементами скроллбара в webkit`,
"example": `div::-webkit-scrollbar-thumb:window-inactive {
	overflow: clip;
}`,
"default": ""
		}
	},
	"pseudoclasses": {
		"title": "Псевдоклассы",
		"hover": {
"start": "элемент:",
"name": "hover",
"value": "{свойства элемента} – свойства в фигурных скобках начинают работать при наведении на элемент",
"example": `div:hover {
	color: mediumaquamarine;
}`,
"default": ""
		},
		"active": {
"start": "элемент:",
"name": "active",
"value": "{свойства элемента} – срабатывает при нажатии на элемент",
"example": `.button:active {
	padding: 25px;
}`,
"default": ""
		},
		"visited": {
"start": "элемент:",
"name": "visited",
"value": "{свойства элемента} – срабатывает только для посещённых элементов",
"example": `a:visited {
	text-decoration: underline;
}`,
"default": ""
		},
		"focus": {
"start": "элемент:",
"name": "focus",
"value": "{свойства элемента} – срабатывает для элементов, находящихся в фокусе (форм, полей ввода)",
"example": `form:focus {
	border: 2px solid #539;
}`,
"default": ""
		},
		"first-child": {
"start": "элемент:",
"name": "first-child",
"value": "{свойства элемента} – срабатывает для первого элемента в блоке",
"example": `li:first-child {
	margin: 25px;
}`,
"default": ""
		},
		"last-child": {
"start": "элемент:",
"name": "last-child",
"value": "{свойства элемента} – срабатывает для последнего элемента в блоке",
"example": `ol:last-child {
	padding: 5px;
}`,
"default": ""
		},
		"nth-child": {
"start": "элемент:",
"name": "nth-child",
"value": "(порядковый номер) {свойства элемента} – срабатывает для элемента в блоке, чей порядковый номер указан в псевдоклассе",
"example": `div:nth-child(4) {
	width: 50px;
}`,
"default": ""
		},
		"odd": {
"start": "элемент:",
"name": "odd",
"value": "{свойства элементов} – срабатывает для элементов с нечётными номерами",
"example": `.end:odd {
	background-color: #000;
}`,
"default": ""
		},
		"even": {
"start": "элемент:",
"name": "even",
"value": "{свойства элементов} – срабатывает для элементов с чётными номерами",
"example": `#background:even {
	border: 0;
}`,
"default": ""
		},
		"not": {
"start": "элемент:",
"name": "not",
"value": "(селектор) {свойства элемента} – срабатывает для всех элементов, кроме тех, которые соответствуют указанному селектору",
"example": `li:not(.active) {
	opacity: 0.5;
}`,
"default": ""
		},
		"checked": {
"start": "элемент:",
"name": "checked",
"value": "{свойства элемента} – срабатывает для выбранных чекбоксов и радиокнопок",
"example": `input:checked {
	background: green;
}`,
"default": ""
		},
		"disabled": {
"start": "элемент:",
"name": "disabled",
"value": "{свойства элемента} – срабатывает для неактивных (заблокированных) полей форм",
"example": `input:disabled {
	background: gray;
}`,
"default": ""
		},
		"first-of-type": {
"start": "элемент:",
"name": "first-of-type",
"value": "{свойства элемента} – срабатывает для первого элемента указанного типа (тега) среди братьев",
"example": `p:first-of-type {
	font-weight: bold;
}`,
"default": ""
		},
		"root": {
"start": "элемент:",
"name": "root",
"value": "{свойства элемента} – срабатывает для корневого элемента документа (обычно это html, удобно для CSS-переменных)",
"example": `:root {
	--main-color: #06c;
}`,
"default": ""
		}
	},
	"pseudoelements": {
		"title": "Псевдоэлементы",
		"before": {
"start": "элемент:",
"name": "before",
"value": `{контент} – применяется для вывода какого-либо контента перед элементом, к которому он добавляется
Особенности:
1. При добавлении :before к блочному элементу, значение свойства display может быть только: block, inline, none, list-item, остальные значения будут трактоваться, как block.
2. При добавлении :before к строчному элементу, display ограничен значениями inline и none, остальные будут трактоваться, как inline.`,
"example": `a:before {
	content: "🌵";
}`,
"default": ""
		},
		"after": {
"start": "элемент:",
"name": "after",
"value": `{контент} – применяется для вывода какого-либо контента после элементом, к которому он добавляется
Особенности:
1. При добавлении :after к блочному элементу, значение свойства display может быть только: block, inline, none, list-item, остальные значения будут трактоваться, как block.
2. При добавлении :after к строчному элементу, display ограничен значениями inline и none, остальные будут трактоваться, как inline.`,
"example": `a:after {
	content: "🍣";
}`,
"default": ""
		},
		"selection": {
"start": "элемент::",
"name": "selection",
"value": "{свойства} – задаёт стиль выделенной части документа",
"example": `body::selection {
	background: green;
}`,
"default": ""
		},
		"placeholder": {
"start": "элемент::",
"name": "placeholder",
"value": "{свойства} – задаёт стиль текста-подсказки (placeholder) в полях ввода (input, textarea)",
"example": `input::placeholder {
	color: gray;
	font-style: italic;
}`,
"default": ""
		},
		"first-line": {
"start": "элемент:",
"name": "first-line",
"value": "{свойства строки} – задаёт стиль первой строки текста, но к ней применяются не все стили",
"example": `p:first-line {
	font-size: 25px;
}`,
"default": ""
		},
		"first-letter": {
"start": "элемент:",
"name": "first-letter",
"value": "{свойства символа} – задаёт стиль первого символа текста, но к нему применяются не все стили",
"example": `p:first-letter {
	font-weight: 900;
}`,
"default": ""
		},
		"-ms-clear": {
"start": "элемент::",
"name": "-ms-clear",
"value": "{свойства} – задаёт стиль кнопки для очистки поля ввода в Internet Explorer, которая появляется в правой части поля только при вводе текста",
"example": `input::-ms-clear {
	display: none;
}`,
"default": ""
		},
		"-moz-focus-inner": {
"start": "элемент::",
"name": "-moz-focus-inner",
"value": "{свойства} – задаёт стиль внутренней части кнопки в FireFox",
"example": `button::-moz-focus-inner {
	padding: 0;
	border: 0;
}`,
"default": ""
		}
	},
	"transitions": {
		"title": "Переходы",
		"transition-duration": {
"start": "",
"name": "transition-duration",
"value": ": время; – устанавливает время, за которое одно значение свойства переходит в другое, осуществляется переход",
"example": "transition-duration: 0,5s;",
"default": " (0s)"
		},
		"transition-property": {
"start": "",
"name": "transition-property",
"value": `: свойство, свойство; – указывает на css-свойства, к которым будет применён переход
Значения:
1. all – применяются все свойства`,
"example": "transition-property: color;",
"default": " (all)"
		},
		"transition-delay": {
"start": "",
"name": "transition-delay",
"value": ": время; – устанавливает время задержки перехода, переход начинает действовать с некоторой задержкой",
"example": "transition-delay: 0s;",
"default": " (0s)"
		},
		"transition-timing-function": {
"start": "",
"name": "transition-timing-function",
"value": `: значение; – устанавливает стиль перехода, некий сценарий, по которому будет осуществяться анимация
Значения:
1. ease – переход медленно начинается, быстро разгоняется и замедляется в конце, этому значению соответствует cubic-bezier(0.25,0.1,0.25,1)
2. ease-in – переход медленно начинается и плавно ускоряется в конце, этому значению соответствует cubic-bezier(0.42,0,1,1)
3. ease-out – переход быстро начинается и плавно замедляется в конце, этому значению соответствует cubic-bezier(0,0,0.58,1)
4. ease-in-out – переход медленно начинается и медленно заканчивается, этому значению соответствует cubic-bezier(0.42,0,0.58,1)
5. linear – переход происходит равномерно на протяжении всего времени, этому значению соответствует cubic-bezier(0,0,1,1)
6. steps(шаги, start или end) – разбивает анимацию на некоторое количество шагов и устанавливает когда изменятся свойства: start – свойства изменятся сразу, end – свойства начнут изменяться в конце первого шага
7. cubic-bezier(1 значение, 2 значение, 3 значение, 4 значение) – позволяет вручную установить значения для кривой ускорения и создать свою собственную анимацию`,
"example": "transition-timing-function: ease-in-out;",
"default": " (ease)"
		},
		"transition": {
"start": "",
"name": "transition",
"value": ": transition-property transition-duration transition-timing-function transition-delay, свойства второго перехода, идущего следующим; – сокращённая запись",
"example": "transition: background-color 0.5s cubic-bezier(0,1,1,0) 0s, width 1s linear 0.1s;",
"default": " (all 0s ease 0s)"
		}
	},
	"animation": {
		"title": "Анимация",
		"keyframes": {
"start": "@",
"name": "keyframes",
"value": " имя {значение%{свойства}значение%{свойства}} – создаёт собственную анимацию",
"example": `@keyframes color {
	0% {
		left: 0%;
	}
	50% {
		border-radius: 0%;
	}
	100% {
		left: 50%;
	}
}`,
"default": ""
		},
		"animation-name": {
"start": "",
"name": "animation-name",
"value": `: имя; – устанавливает анимации элементу, можно указать несколько через запятую, приоритет будет у последней записи
Значения:
1. none – к элементу не применяется никакая анимация`,
"example": "animation-name: color;",
"default": " (none)"
		},
		"animation-duration": {
"start": "",
"name": "animation-duration",
"value": ": время; – устанавливает длительность анимации",
"example": "animation-duration: 250ms;",
"default": " (0s)"
		},
		"animation-timing-function": {
"start": "",
"name": "animation-timing-function",
"value": `: значение; – устанавливает стиль анимации, некий сценарий
Значения:
1. ease – анимация медленно начинается, быстро разгоняется и замедляется в конце, этому значению соответствует cubic-bezier(0.25,0.1,0.25,1)
2. ease-in – анимация медленно начинается и плавно ускоряется в конце, этому значению соответствует cubic-bezier(0.42,0,1,1)
3. ease-out – анимация быстро начинается и плавно замедляется в конце, этому значению соответствует cubic-bezier(0,0,0.58,1)
4. ease-in-out – анимация медленно начинается и медленно заканчивается, этому значению соответствует cubic-bezier(0.42,0,0.58,1)
5. linear – анимация происходит равномерно на протяжении всего времени, этому значению соответствует cubic-bezier(0,0,1,1)
6. steps(шаги, start или end) – разбивает анимацию на некоторое количество шагов и устанавливает когда изменятся свойства: start – свойства изменятся сразу, end – свойства начнут изменяться в конце первого шага
7. cubic-bezier(1 значение, 2 значение, 3 значение, 4 значение) – позволяет вручную установить значения для кривой ускорения и создать свою собственную анимацию`,
"example": "animation-timing-function: linear;",
"default": " (ease)"
		},
		"animation-iteration-count": {
"start": "",
"name": "animation-iteration-count",
"value": `: кол-во раз; – устанавливает сколько раз будет повторяться анимация
Значения:
1. infinite – анимация будет проигрываться бесконечно`,
"example": "animation-iteration-count: infinite;",
"default": " (1)"
		},
		"animation-direction": {
"start": "",
"name": "animation-direction",
"value": `: значение; – устанавливает направление анимации
Значения:
1. normal – анимация будет проигрываться так как должно быть
2. reverse – анимация будет проигрываться в обратном порядке
3. alternate – каждый чётный раз будет проигрываться в обратном порядке
4. alternate-reverse – каждый нечётный раз будет проигрываться в обратном порядке`,
"example": "animation-direction: alternate;",
"default": " (normal)"
		},
		"animation-play-state": {
"start": "",
"name": "animation-play-state",
"value": `: значение; – позволяет запускать или останавливать анимацию по событию
Значения:
1. running – анимация проигрывается
2. paused – анимация останавливается`,
"example": "animation-play-state: paused;",
"default": " (running)"
		},
		"animation-delay": {
"start": "",
"name": "animation-delay",
"value": ": значение; – устанавливает время задержки анимации, анимация начинает действовать с некоторой задержкой",
"example": "animation-delay: 2s;",
"default": " (0s)"
		},
		"animation-fill-mode": {
"start": "",
"name": "animation-fill-mode",
"value": `: значение; – устанавливает какие стили должны применяться к элементу, когда анимация не проигрывается (по завершению или остановке)
Значения:
1. none – к элементу не применяются никакие стили
2. forwards – элемент будет выглядеть, как выглядел в конце проигрывания анимации (на последнем кадре)
3. backwards – элемент будет выглядеть, как выглядел изначально (на первом кадре)
4. both – элемент будет выглядеть, как выглядел в конце проигрывания анимации (на последнем кадре)`,
"example": "animation-fill-mode: backwards;",
"default": " (none)"
		},
		"animation": {
"start": "",
"name": "animation",
"value": ": animation-name animation-duration animation-timing-function animation-iteration-count animation-direction animation-play-state animation-delay animation-fill-mode; – сокращённая запись",
"example": "animation: color 1s linear infinite normal running 0s both;",
"default": " (none 0s ease 1 normal running 0s none)"
		}
	},
	"transform": {
		"title": "Трансформация",
		"translate": {
"start": "transform: ",
"name": "translate",
"value": "(X, Y); – cдвигает элемент вправо и вниз относительно начального положения объекта",
"example": "transform: translate(30px, -15px);",
"default": " (none)"
		},
		"scale": {
"start": "transform: ",
"name": "scale",
"value": `(X, Y); – масштабирует размеры элемента
Краткая запись:
1. transform: scale(X■Y);`,
"example": "transform: scale(1.5, 1.25);",
"default": " (none)"
		},
		"rotate": {
"start": "transform: ",
"name": "rotate",
"value": "(Xdeg); – поворачивает элемент по часовой стрелке",
"example": "transform: rotate(45deg);",
"default": " (none)"
		},
		"skew": {
"start": "transform: ",
"name": "skew",
"value": "(Xdeg, Ydeg); – наклоняет элемент",
"example": "transform: skew(45deg, -10deg);",
"default": " (none)"
		},
		"matrix": {
"start": "transform: ",
"name": "matrix",
"value": `(A, B, C, D, E, F); – деформирует (наклоняет) элемент
A – масштабирует элемент по горизонтали (scale(X))
B – деформирует (сдвигает) стороны элемента по вертикали (skew(X))
C – деформирует (сдвигает) стороны элемента по горизонтали (skew(Y))
D – масштабирует элемент по вертикали (scale(Y))
E – сдвигает элемент по горизонтали (translate(X))
F – сдвигает элемент по вертикали (translate(Y))`,
"example": "transform: matrix(0.5, 0.1, 0.1, 0.5, 10, 15);",
"default": " (none)"
		},
		"transform": {
"start": "",
"name": "transform",
"value": ": translate(X, Y) rotate(Xdeg) scale(X, Y); – сокращённая запись",
"example": "transform: translate(30px, 30px) rotate(45deg) scale(0.8);",
"default": " (none)"
		},
		"transform-origin": {
"start": "",
"name": "transform-origin",
"value": `: (X, Y)■или■значения; – смещает центр трансформации, относительно которого происходит изменение элемента
Значения:
1. center – центр трансформации в центре элемента
2. top – центр трансформации сверху элемента
3. right – центр трансформации справа элемента
4. bottom – центр трансформации снизу элемента
5. left – центр трансформации слева элемента`,
"example": "transform-origin: (25px, -10px);",
"default": " (50% 50% 0)"
		},
		"perspective": {
"start": "",
"name": "perspective",
"value": ": (X, Y)■или■значения; – создаёт перспективу",
"example": "perspective: (25px, -10px);",
"default": " (none)"
		},
		"perspective-origin": {
"start": "",
"name": "perspective-origin",
"value": `: (X, Y)■или■значения; – смещает центр перспективы
Значения:
1. center – центр перспективы в центре элемента
2. top – центр перспективы сверху элемента
3. right – центр перспективы справа элемента
4. bottom – центр перспективы снизу элемента
5. left – центр перспективы слева элемента`,
"example": "perspective-origin: top left;",
"default": " (50% 50%)"
		},
		"translate3d": {
"start": "transform: ",
"name": "translate3d",
"value": "(X, Y, Z); – cдвигает элемент по 3 осям относительно начального положения объекта",
"example": "transform: translate3d(30px, 30px, 30px);",
"default": " (none)"
		},
		"scale3d": {
"start": "transform: ",
"name": "scale3d",
"value": "(X, Y, Z); – масштабирует размеры элемента по 3 осям",
"example": "transform: scale3d(1.5, 1.25);",
"default": " (none)"
		},
		"rotate3d": {
"start": "transform: ",
"name": "rotate3d",
"value": "(X, Y, Z, Ndeg); – поворачивает элемент по часовой стрелке относительно 3 осей",
"example": "transform: rotate3d(1, 1, 1, 45deg);",
"default": " (none)"
		},
		"matrix3d": {
"start": "transform: ",
"name": "matrix3d",
"value": `(n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n); – задаёт трёхмерное преобразование, как однородную матрицу размером 4×4 с шестнадцатью значениями в столбцах
Генератор 3D матриц – http://ds-overdesign.com/transform/matrix3d.html`,
"example": "transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);",
"default": " (none)"
		},
		"transform3d": {
"start": "",
"name": "transform",
"value": ": translate3d(X, Y, Z) rotate3d(X, Y, Z, Ndeg); – сокращённая запись",
"example": "transform: translate3d(30px, 30px,30px) rotate3d(1, 1, 1, 30deg);",
"default": " (none)"
		},
		"transform-style": {
"start": "",
"name": "transform-style",
"value": `: значение; – устанавливает, как дочерние элементы будут отображаться в 3D-пространстве
Значения:
1. flat – устанавливает, что дочерний элемент лежит в той же плоскости, что и родительский
2. preserve-3d – устанавливает, что дочерний элемент должен быть спозиционирован в 3D-пространстве`,
"example": "transform-style: preserve-3d;",
"default": " (flat)"
		},
		"backface-visibility": {
"start": "",
"name": "backface-visibility",
"value": `: значение; – управляет отображением обратной стороны элемента
Значения:
1. visible – обратная сторона элемента видна и отображается через переднюю поверхность элемента зеркально
2. hidden – обратная сторона не видна, скрываясь за передней поверхностью элемента`,
"example": "backface-visibility: visible;",
"default": " (visible)"
		}
	}
};
