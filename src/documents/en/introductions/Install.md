### Install

##### Vue CLI Install

If the project has not been created yet, run the following command to create it. After executing the command, follow the instructions on the screen.

```shell-session
$ vue create project-name
```

After creating the project, use `npm` to install SoloUI.

```shell-session
$ npm i @onkz481/solo-ui
```

Create a SoloUI plug-in file with the following contents (the file creation location is an example).

```js
// src/plugins/soloui.js

import Vue from 'vue'
import SoloUi from 'solo-ui'
import 'solo-ui/dist/solo-ui.min.css'

Vue.use(SoloUi)

const opts = {}

export default new SoloUi(opts)
```

Go to the main entry point and pass a SoloUI object as an option when instantiating Vue.

```js
// src/main.js

import Vue from 'vue'
import soloui from './plugins/soloui'

...

new Vue({
  soloui,
  ...
}).$mount('#app')
```