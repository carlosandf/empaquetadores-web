# Utilizando Rollup

Rollup es un empaquetador de módulos para JavaScript. Su función principal es tomar módulos de JavaScript y sus dependencias, luego combinarlos en un solo archivo optimizado para la producción. Este proceso es conocido como "empaquetado" y es una parte fundamental del desarrollo web moderno.

Algunas características clave de Rollup incluyen:

1. **Empaquetado de Módulos ES6:**
   Rollup está diseñado para trabajar con módulos ES6 (ECMAScript 2015) y versiones posteriores. Puede manejar importaciones y exportaciones de módulos de manera eficiente.

2. **Árbol de Dependencias Eficiente:**
   Rollup analiza el código fuente y construye un árbol de dependencias. Luego, optimiza este árbol para eliminar código no utilizado, lo que puede reducir significativamente el tamaño del archivo resultante.

3. **Treeshaking:**
   Una de las características más destacadas de Rollup es su capacidad para realizar "treeshaking". Esto significa que elimina automáticamente el código que no se utiliza, lo que resulta en bundles (paquetes) más pequeños y eficientes.

4. **Salida Personalizable:**
   Rollup permite una salida altamente personalizable. Puedes configurar varios formatos de salida, como CommonJS, AMD, UMD, o incluso ESM (ECMAScript Modules), según tus necesidades y el entorno en el que estás ejecutando tu código.

5. **Plugins:**
   Rollup es extensible mediante el uso de plugins. Hay plugins disponibles para integrar con diversas herramientas y entornos, como transpiladores (por ejemplo, Babel), manipulación de archivos, optimización de código, entre otros.

Al utilizar Rollup, los desarrolladores pueden crear bundles más eficientes y optimizados para sus aplicaciones web, lo que contribuye a una carga más rápida y una mejor experiencia del usuario.

---


## Instalar las dependencias

```bash
npm install
```

## Ejecutar el siguiente comando para inicializar un servidor de desarrollo

```bash
npm start
```

Puedes visualizar una demo [aquí](https://cf-shops-rollup.netlify.app/).