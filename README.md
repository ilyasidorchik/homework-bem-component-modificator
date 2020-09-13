## Практика с библиотекой компонентов на БЭМ-Реакте

Яндекс делает свою библиотеку компонентов с помощью пакетов серии @bem-react. Я попробовал такой же подход, сделав одну кнопку.

Я создал компонент кнопки, которым могу пользоваться в проекте следующим образом:

```ts
// src/App.ts
import React from 'react'
import { Link } from '@yandex-lego/components/Link/desktop/bundle'

const App = () => (
  <Button view="link">
    Открыть
  </Button>
)
```


### См. также

[Библиотека @yandex-ui](https://github.com/bem/yandex-ui)

[Доклад на Яндекс-субботнике](https://youtu.be/trwdc0JCelA)
