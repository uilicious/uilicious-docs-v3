# Right Clicking on Objects

### `I.rightClick` <a href="#irightclick" id="irightclick"></a>

Right click on an element.

For image / icon elements, we'd strongly recommend that setting an `aria-label` for the target element, use `I.click` using the label. This will also help make your application more friendly to humans using accessibility tools.

> Note that this action will typically open the default OS context menu, which cannot be interacted with by the test engine or captured in screenshot. Hence, this command will only be useful if you have a custom behavior on right click for the target element

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.rightClick(target)
I.rightClick(target, x, y)
```

**Parameters**

| Parameter | Type   | Remarks                                                                                             |
| --------- | ------ | --------------------------------------------------------------------------------------------------- |
| target    | string | <p>Keyword to identify the element to click.<br>This is case-insensitive.</p>                       |
| x         | number | <p>Optional.<br>Offset the click x pixels right from the top-left corner of the target element.</p> |
| y         | number | <p>Optional.<br>Offset the click y pixels down from the top-left corner of the target element.</p>  |
