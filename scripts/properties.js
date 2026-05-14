export const properties = {
	"text": {
		"title": "Свойства текста",
		"color": {
"start": "↓",
"name": "color",
"value": ": цвет; – задаёт цвет текста",
"example": "green",
"default": " (canvastext)"
		},
		"font-size": {
"start": "↓",
"name": "font-size",
"value": ": размер; – задаёт размер текста",
"example": "25px",
"default": " (medium)"
		},
		"font-family": {
"start": "↓",
"name": "font-family",
"value": `: имя■шрифта1, имя■шрифта2, тип■шрифта; – задаёт шрифт текста
Если на компьютере пользователя нет шрифта1, то загружается следующий (шрифт2). Если и его нет, то загружается шрифт указанного типа.
Типы шрифтов:
1. serif – шрифты с засечками, антиквенные (шрифт Times)
2. sans-serif – рубленные шрифты, шрифты без засечек или гротески (шрифт Arial)
3. cursive – курсивные шрифты
4. fantasy – декоративные шрифты
5. monospace – моноширинные шрифты, ширина каждого символа одинакова (шрифт Courier)`,
"example": "Arial, sans-serif",
"default": " (браузерное значение)"
		},
		"font-face": {
"start": "@",
"name": "font-face",
"value": ` {текст из внешнего файла} – внедряет в документ шрифт из внешнего файла
Конвертер шрифтов – <a target="_blank" href="https://www.fontconverter.io">https://www.fontconverter.io</a>`,
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
"example": "italic",
"default": " (normal)"
		},
		"font-variant": {
"start": "↓",
"name": "font-variant",
"value": `: значение; – управляет регистром текста
Значения:
1. normal – обычное начертание
2. small-caps – все символы становятся малыми заглавными`,
"example": "small-caps",
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
"example": "uppercase",
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
"example": "bold",
"default": " (normal)"
		},
		"text-shadow": {
"start": "↓",
"name": "text-shadow",
"value": `: горизонтальное■смещение вертикальное■смещение размер цвет; – добавляет тень тексту
Значения:
1. none – к элементу не применяется никакая тень`,
"example": "1px 1px 2px black",
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
"example": "underline dotted red",
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
"example": "center",
"default": " (start)"
		},
		"text-indent": {
"start": "↓",
"name": "text-indent",
"value": ": размер; – задаёт размер красной строки",
"example": "10px",
"default": " (0)"
		},
		"letter-spacing": {
"start": "↓",
"name": "letter-spacing",
"value": ": размер; – задаёт интервал между символами",
"example": "5px",
"default": " (normal)"
		},
		"word-spacing": {
"start": "↓",
"name": "word-spacing",
"value": ": размер; – задаёт интервал между словами",
"example": "6px",
"default": " (normal)"
		},
		"line-height": {
"start": "↓",
"name": "line-height",
"value": ": размер; – задаёт межстрочный интервал",
"example": "1.5",
"default": " (normal)"
		},
		"font": {
"start": "↓",
"name": "font",
"value": ": font-style font-variant font-weight font-size/line-height font-family; – сокращённая запись",
"example": "italic normal bold 12px/1.2px Tahoma, Arial, sans-serif",
"default": ""
		},
		"overflow-wrap": {
"start": "↓",
"name": "overflow-wrap",
"value": `: значение; – управляет переносом слов на следующую строку
Значения:
1. normal – слова не обрываются и переносятся целиком
2. break-word – слова, которые не помещаются в строку, обрываются и переносятся`,
"example": "break-word",
"default": " (normal)"
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
"example": "nowrap",
"default": " (normal)"
		},
		"text-overflow": {
"start": "",
"name": "text-overflow",
"value": `: значение; – управляет свойствами обрезки текста, если он не помещается в заданную область
Значения:
1. clip – текст обрезается по размеру заданной области
2. ellipsis – текст обрезается по размеру заданной области, и в конце строки добавляется многоточие`,
"example": "ellipsis",
"default": " (clip)"
		},
		"column-count": {
"start": "",
"name": "column-count",
"value": ": кол-во; – устанавливает количество колонок в тексте",
"example": "2",
"default": " (auto)"
		},
		"column-width": {
"start": "",
"name": "column-width",
"value": ": размер; – устанавливает размер колонок в тексте, реальная ширина колонки может быть больше введённого значения",
"example": "250px",
"default": " (auto)"
		},
		"columns": {
"start": "",
"name": "columns",
"value": ": кол-во размер; – сокращённая запись",
"example": "4 25%",
"default": " (auto auto)"
		},
		"column-gap": {
"start": "",
"name": "column-gap",
"value": ": размер; – устанавливает интервал между колонками",
"example": "20px",
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
"example": "1px solid gray",
"default": " (medium solid currentcolor)"
		}
	},
	"elements": {
		"title": "Свойства элементов",
		"box-sizing": {
"start": "↓",
"name": "box-sizing",
"value": `: значение; – изменяет алгоритм расчёта ширины и высоты элемента
Значения:
1. content-box – свойства width и height задают ширину и высоту контента и не включают в себя значения полей (padding), границ (border) и отступов (margin)
2. padding-box – свойства width и height задают ширину и высоту контента и включают в себя значения полей (padding), но не границ (border) и отступов (margin)
3. border-box – свойства width и height задают ширину и высоту контента и включают в себя только значения полей (padding), границ (border), но не отступы (margin)`,
"example": "border-box",
"default": " (content-box)"
		},
		"user-select": {
"start": "↓",
"name": "user-select",
"value": `: значение; – управляет выделением текста
Значения:
1. auto – текст веделяется по умолчанию
2. text – текст выделяется, как текст
3. all – выделяется сразу весь элемент
4. contain – выделение будет ограничено границами элемента
5. none – запрещает выделять текст`,
"example": "none",
"default": " (auto)"
		},
		"overflow": {
"start": "↓",
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
"example": "auto",
"default": " (visible)"
		},
		"resize": {
"start": "↓",
"name": "resize",
"value": `: значение; – управляет возможностью изменения размеров элемента пользователем
Значения:
1. none – размеры элемента нельзя изменять
2. both – размеры можно изменять
3. horizontal – размеры можно изменять только по горизонтали
4. vertical – размеры можно изменять только по вертикали`,
"example": "both",
"default": " (none)"
		},
		"display": {
"start": "↓",
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
9. inline-table – отображает элемент в виде таблицы строчного уровня. Реагирует также, как html-элемент <table>, но как строчный блок, а не элемент блочного уровня. Внутри табличного блока находится контекст блочного уровня
10. list-item – элемент реагирует, как html-элемент <li>
11. run-in – отображает элемент, как блочный или строчный в зависимости от контекста
12. table – элемент реагирует, как html-элемент <table>
13. table-caption – элемент реагирует, как html-элемент <caption>
14. table-column-group – элемент реагирует, как html-элемент <colgroup>
15. table-header-group – элемент реагирует, как html-элемент <thead>
16. table-footer-group – элемент реагирует, как html-элемент <tfoot>
17. table-row-group – элемент реагирует, как html-элемент <tbody>
18. table-cell – элемент реагирует, как html-элемент <td>
19. table-column – элемент реагирует, как html-элемент <col>
20. table-row – элемент реагирует, как html-элемент <tr>
21. none – элемент не отображается`,
"example": "block",
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
"example": "hidden",
"default": " (visible)"
		},
		"float": {
"start": "↓",
"name": "float",
"value": `: значение; – устанавливает, по какой стороне будет выравниваться элемент, при этом остальные элементы будут обтекать его с других сторон
Значения:
1. none – всегда добавляются полосы прокрутки
2. left – выравнивает элемент по левому краю, а все остальные элементы обтекают его по правой стороне
3. right – отображается только область внутри элемента, остальное обрезается`,
"example": "left",
"default": " (none)"
		},
		"clear": {
"start": "↓",
"name": "clear",
"value": `: значение; – устанавливает, с какой стороны элемента запрещено его обтекание другими элементами
Если установлено обтекание элемента float, свойство clear отменяет его действие.
Значения:
1. none – отменяет действие данного свойства
2. left – отменяет обтекание с левой стороны элемента
3. right – отменяет обтекание с правой стороны элемента
4. both – отменяет обтекание элемента одновременно с правого и левого края`,
"example": "both",
"default": " (none)"
		}
	},
	"border": {
		"title": "Свойства элементов"
	}
};


//   "elements": {
//     "title": "Свойства элементов",
//     "width": {
//       "name": "width",
//       "value": "ширина",
//       "description": "задаёт ширину блочных и некоторых строчных (img) тегов",
//       "example": "150px",
//       "default": "auto"
//     }
//   },
//   "border": {
//     "title": "Свойства элементов",
//     "border-width": {
//       "name": "border-width",
//       "value": "толщина",
//       "description": "задаёт толщину линии границы со всех сторон или по отдельности",
//       "example": "2px 1px 3px",
//       "default": "medium"
//     },
//     "border-style": {
//       "name": "border-style",
//       "value": "стиль",
//       "description": "задаёт тип линии границы. Без этого свойства граница не отобразится",
//       "example": "solid dashed dotted double",
//       "default": "none"
//     },
//     "border-color": {
//       "name": "border-color",
//       "value": "цвет",
//       "description": "задаёт цвет границы. Наследует цвет текста, если не указан явно",
//       "example": "#ff5733 rgb(0,100,200)",
//       "default": "currentcolor"
//     },
//     "border-radius": {
//       "name": "border-radius",
//       "value": "скругление",
//       "description": "скругляет углы элемента. Принимает 1-4 значения или дробные радиусы",
//       "example": "10px 50% 20px/10px",
//       "default": "0"
//     },
//     "border-image": {
//       "name": "border-image",
//       "value": "изображение",
//       "description": "заменяет обычную границу на изображение с заданными отступами и способом заполнения",
//       "example": "url(border.png) 30 round",
//       "default": "none"
//     }
//   },
//   "background": {
//     "title": "Свойства фона",
//     "background-color": {
//       "name": "background-color",
//       "value": "цвет",
//       "description": "задаёт сплошной цвет фона элемента",
//       "example": "rgba(255,255,255,0.8) hsl(120, 100%, 50%)",
//       "default": "transparent"
//     },
//     "background-image": {
//       "name": "background-image",
//       "value": "изображение",
//       "description": "задаёт одно или несколько фоновых изображений или градиентов",
//       "example": "url('bg.jpg'), linear-gradient(to bottom, #fff, #ccc)",
//       "default": "none"
//     },
//     "background-repeat": {
//       "name": "background-repeat",
//       "value": "повторение",
//       "description": "управляет повторением фонового изображения по осям",
//       "example": "repeat-x no-repeat space round",
//       "default": "repeat"
//     },
//     "background-position": {
//       "name": "background-position",
//       "value": "позиция",
//       "description": "задаёт начальную позицию фонового изображения относительно контейнера",
//       "example": "center top 20px 50% left 10px bottom 20px",
//       "default": "0% 0%"
//     },
//     "background-size": {
//       "name": "background-size",
//       "value": "размер",
//       "description": "задаёт размер фонового изображения. Может растягивать или обрезать по контейнеру",
//       "example": "cover contain 100px 200px 50% auto",
//       "default": "auto auto"
//     }
//   },
//   "position": {
//     "title": "Позиционирование",
//     "position": {
//       "name": "position",
//       "value": "тип",
//       "description": "определяет метод позиционирования элемента в потоке документа",
//       "example": "relative absolute fixed sticky",
//       "default": "static"
//     },
//     "top": {
//       "name": "top",
//       "value": "смещение",
//       "description": "задаёт смещение верхнего края элемента от ближайшего позиционированного родителя",
//       "example": "50px -20px 10%",
//       "default": "auto"
//     },
//     "left": {
//       "name": "left",
//       "value": "смещение",
//       "description": "задаёт смещение левого края элемента от ближайшего позиционированного родителя",
//       "example": "0px 2rem -5%",
//       "default": "auto"
//     },
//     "z-index": {
//       "name": "z-index",
//       "value": "порядок",
//       "description": "управляет порядком наложения элементов по оси Z (глубина). Работает только с non-static позиционированием",
//       "example": "10 -1 999",
//       "default": "auto"
//     },
//     "clip-path": {
//       "name": "clip-path",
//       "value": "область",
//       "description": "обрезает видимую область элемента по заданной фигуре",
//       "example": "circle(50%) inset(10px) polygon(0 0, 100% 0, 50% 100%)",
//       "default": "none"
//     }
//   },
//   "scrollbar": {
//     "title": "Свойства скроллбара",
//     "scrollbar-width": {
//       "name": "scrollbar-width",
//       "value": "толщина",
//       "description": "задаёт толщину полосы прокрутки (поддерживается Firefox)",
//       "example": "thin auto none",
//       "default": "auto"
//     },
//     "scrollbar-color": {
//       "name": "scrollbar-color",
//       "value": "цвета",
//       "description": "задаёт цвет ползунка и фона трека прокрутки (поддерживается Firefox)",
//       "example": "#888 #f1f1f1 dark light",
//       "default": "auto"
//     },
//     "overflow": {
//       "name": "overflow",
//       "value": "обработка",
//       "description": "управляет отображением содержимого, выходящего за границы элемента, и появлением скроллбаров",
//       "example": "hidden scroll auto visible clip",
//       "default": "visible"
//     },
//     "overscroll-behavior": {
//       "name": "overscroll-behavior",
//       "value": "поведение",
//       "description": "контролирует, что происходит при достижении границы прокрутки (отключение 'резинового' эффекта или скролла родителя)",
//       "example": "contain auto none",
//       "default": "auto"
//     },
//     "scroll-snap-type": {
//       "name": "scroll-snap-type",
//       "value": "привязка",
//       "description": "включает магнитную привязку скролла к дочерним элементам",
//       "example": "x mandatory y proximity both",
//       "default": "none"
//     }
//   },
//   "flex-containers": {
//     "title": "Флекс-контейнеры",
//     "flex-direction": {
//       "name": "flex-direction",
//       "value": "направление",
//       "description": "задаёт направление главной оси и порядок следования элементов",
//       "example": "row column row-reverse column-reverse",
//       "default": "row"
//     },
//     "justify-content": {
//       "name": "justify-content",
//       "value": "выравнивание",
//       "description": "выравнивает элементы вдоль главной оси и распределяет свободное пространство",
//       "example": "center space-between space-around space-evenly",
//       "default": "flex-start"
//     },
//     "align-items": {
//       "name": "align-items",
//       "value": "выравнивание",
//       "description": "выравнивает элементы вдоль поперечной оси внутри flex-контейнера",
//       "example": "stretch center baseline flex-end",
//       "default": "stretch"
//     },
//     "flex-wrap": {
//       "name": "flex-wrap",
//       "value": "перенос",
//       "description": "разрешает или запрещает перенос flex-элементов на новую строку/столбец",
//       "example": "wrap nowrap wrap-reverse",
//       "default": "nowrap"
//     },
//     "gap": {
//       "name": "gap",
//       "value": "отступы",
//       "description": "задаёт фиксированные отступы между строками и столбцами flex-элементов",
//       "example": "10px 1rem 20px 40px",
//       "default": "0"
//     }
//   },
//   "flex-elements": {
//     "title": "Флекс-элементы",
//     "flex-grow": {
//       "name": "flex-grow",
//       "value": "коэффициент",
//       "description": "определяет, насколько элемент может увеличиться относительно других элементов при наличии свободного места",
//       "example": "0 1 2",
//       "default": "0"
//     },
//     "flex-shrink": {
//       "name": "flex-shrink",
//       "value": "коэффициент",
//       "description": "определяет, насколько элемент может сжаться относительно других при нехватке места",
//       "example": "0 1 2",
//       "default": "1"
//     },
//     "flex-basis": {
//       "name": "flex-basis",
//       "value": "базовый размер",
//       "description": "задаёт начальный размер элемента до распределения свободного пространства",
//       "example": "auto 200px 30% max-content",
//       "default": "auto"
//     },
//     "align-self": {
//       "name": "align-self",
//       "value": "переопределение",
//       "description": "переопределяет выравнивание конкретного flex-элемента по поперечной оси",
//       "example": "center flex-end baseline stretch",
//       "default": "auto"
//     },
//     "order": {
//       "name": "order",
//       "value": "порядок",
//       "description": "изменяет визуальный порядок отображения элемента без изменения HTML-структуры",
//       "example": "-1 0 5 10",
//       "default": "0"
//     }
//   },
//   "pseudoclasses": {
//     "title": "Псевдоклассы",
//     "hover": {
//       "name": ":hover",
//       "value": "наведение",
//       "description": "применяет стили, когда курсор мыши находится над элементом",
//       "example": "a:hover { color: red; }",
//       "default": "не применяется"
//     },
//     "focus": {
//       "name": ":focus",
//       "value": "фокус",
//       "description": "применяет стили, когда элемент получает фокус (через Tab или клик)",
//       "example": "input:focus { outline: 2px solid blue; }",
//       "default": "не применяется"
//     },
//     "active": {
//       "name": ":active",
//       "value": "нажатие",
//       "description": "применяет стили в момент нажатия кнопки мыши или клавиши",
//       "example": "button:active { transform: scale(0.98); }",
//       "default": "не применяется"
//     },
//     "nth-child": {
//       "name": ":nth-child()",
//       "value": "порядковый номер",
//       "description": "выбирает элементы по формуле или ключевым словам среди всех дочерних",
//       "example": "li:nth-child(odd) .item:nth-child(3n)",
//       "default": "не применяется"
//     },
//     "not": {
//       "name": ":not()",
//       "value": "исключение",
//       "description": "инвертирует выборку, применяя стили ко всем элементам, кроме указанных",
//       "example": "div:not(.hidden) input:not([type='submit'])",
//       "default": "не применяется"
//     }
//   },
//   "pseudoelements": {
//     "title": "Псевдоэлементы",
//     "before": {
//       "name": "::before",
//       "value": "вставка до",
//       "description": "создаёт виртуальный дочерний элемент, вставляемый перед содержимым основного",
//       "example": ".box::before { content: '★ '; }",
//       "default": "content: none"
//     },
//     "after": {
//       "name": "::after",
//       "value": "вставка после",
//       "description": "создаёт виртуальный дочерний элемент, вставляемый после содержимого основного",
//       "example": ".link::after { content: ' →'; }",
//       "default": "content: none"
//     },
//     "first-line": {
//       "name": "::first-line",
//       "value": "первая строка",
//       "description": "применяет стили только к первой строке текстового блока",
//       "example": "p::first-line { font-weight: bold; }",
//       "default": "наследует от элемента"
//     },
//     "placeholder": {
//       "name": "::placeholder",
//       "value": "подсказка",
//       "description": "стилизирует текст-заполнитель в полях ввода форм",
//       "example": "input::placeholder { color: gray; opacity: 0.5; }",
//       "default": "зависит от браузера"
//     },
//     "selection": {
//       "name": "::selection",
//       "value": "выделение",
//       "description": "задаёт внешний вид текста, выделенного пользователем мышью или клавиатурой",
//       "example": "::selection { background: yellow; color: black; }",
//       "default": "синий фон, белый текст (браузерное)"
//     }
//   },
//   "transitions": {
//     "title": "Переходы",
//     "transition-property": {
//       "name": "transition-property",
//       "value": "свойство",
//       "description": "указывает, какое CSS-свойство будет анимироваться при изменении",
//       "example": "all opacity transform width",
//       "default": "all"
//     },
//     "transition-duration": {
//       "name": "transition-duration",
//       "value": "длительность",
//       "description": "задаёт время, за которое происходит плавный переход",
//       "example": "0.3s 500ms 1s",
//       "default": "0s"
//     },
//     "transition-timing-function": {
//       "name": "transition-timing-function",
//       "value": "плавность",
//       "description": "определяет кривую скорости изменения значения во времени",
//       "example": "ease linear ease-in-out cubic-bezier(0.68, -0.55, 0.27, 1.55)",
//       "default": "ease"
//     },
//     "transition-delay": {
//       "name": "transition-delay",
//       "value": "задержка",
//       "description": "задаёт паузу перед началом воспроизведения перехода",
//       "example": "0.1s 200ms 0.5s",
//       "default": "0s"
//     },
//     "transition-shorthand": {
//       "name": "transition",
//       "value": "сокращение",
//       "description": "сокращённая запись всех свойств перехода в одном объявлении",
//       "example": "opacity 0.3s ease-in-out 0.1s",
//       "default": "нет"
//     }
//   },
//   "animation": {
//     "title": "Анимация",
//     "animation-name": {
//       "name": "animation-name",
//       "value": "имя",
//       "description": "привязывает элемент к набору ключевых кадров (@keyframes)",
//       "example": "fadeIn slideUp pulse",
//       "default": "none"
//     },
//     "animation-duration": {
//       "name": "animation-duration",
//       "value": "длительность",
//       "description": "задаёт время выполнения одного цикла анимации",
//       "example": "1s 2.5s 800ms",
//       "default": "0s"
//     },
//     "animation-iteration-count": {
//       "name": "animation-iteration-count",
//       "value": "повторы",
//       "description": "устанавливает количество циклов воспроизведения анимации",
//       "example": "infinite 3 5",
//       "default": "1"
//     },
//     "animation-direction": {
//       "name": "animation-direction",
//       "value": "направление",
//       "description": "определяет, воспроизводится ли анимация в обратном порядке или чередуется",
//       "example": "reverse alternate alternate-reverse",
//       "default": "normal"
//     },
//     "animation-fill-mode": {
//       "name": "animation-fill-mode",
//       "value": "заполнение",
//       "description": "задаёт стили элемента до начала и после завершения анимации",
//       "example": "forwards backwards both",
//       "default": "none"
//     }
//   },
//   "transform": {
//     "title": "Трансформация",
//     "transform": {
//       "name": "transform",
//       "value": "преобразование",
//       "description": "применяет 2D или 3D трансформации: сдвиг, поворот, масштаб, наклон",
//       "example": "translateX(50px) rotate(45deg) scale(1.2)",
//       "default": "none"
//     },
//     "transform-origin": {
//       "name": "transform-origin",
//       "value": "точка опоры",
//       "description": "задаёт точку, относительно которой выполняется трансформация",
//       "example": "center top left 50% 50% 0px",
//       "default": "50% 50% 0"
//     },
//     "transform-style": {
//       "name": "transform-style",
//       "value": "3D контекст",
//       "description": "указывает, должны ли дочерние элементы рендериться в 3D-пространстве или сплющиваться",
//       "example": "preserve-3d flat",
//       "default": "flat"
//     },
//     "perspective": {
//       "name": "perspective",
//       "value": "глубина",
//       "description": "задаёт расстояние от зрителя до плоскости Z=0, влияя на эффект 3D-глубины",
//       "example": "1000px 50rem 800",
//       "default": "none"
//     },
//     "backface-visibility": {
//       "name": "backface-visibility",
//       "value": "видимость тыла",
//       "description": "определяет, видна ли обратная сторона элемента при повороте на 180° и более",
//       "example": "hidden visible",
//       "default": "visible"
//     }
//   }
// }
