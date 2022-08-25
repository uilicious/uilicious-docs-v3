---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.type or I.press command to enter keyboard input in your UIlicious test.
---

# Type/Press in input fields

### `I.type / I.press` <a href="#itype--ipress" id="itype--ipress"></a>

> I.press and I.type are exactly the same thing - we simply provided these two versions for whichever linguistic preference you have.

Press a key or a string of keys.

This will send keyboard inputs to the element in focus, or the page `<body>` if no element is focus.

#### Usage

```javascript
I.type(key)
```

**Parameters**

| Parameter | Type   | Remarks                                                                                                                                                                                                                                                                       |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Key     | string, array of strings | <p>Key(s) to Press</p> |                                                                                                                                                                                                                                            |

#### Example(s)

**Text Input**

```javascript
I.type("hello") // this will send "h" "e" "l" "l" "o"
```

**Press a Key**

```javascript
I.press("?") // this will send "?"
```

**Press a special key**

```javascript
// Send a special keys 
I.press("Backspace") // This will press the "Backspace" key
I.press("Delete") // This will press the "Delete" key
I.pressEnter() // Convenience command are provided for frequently used keys
```

**Press a Chord (send multiple keys simultaneously)**

```javascript
// Send a chord (press multiple keys at the same time)
I.press(["Shift", "a"])
I.press(["Alt", "A"]) 
I.press(["Control", "A"])
I.press(["Meta", "A"])
I.press(["Shift", "Control", "A"])
```

---

## I.pressEnter

Press the `Enter` key.

This is same as using the command `I.press("Enter")`.

### Usage
```javascript
I.pressEnter()
```

---

## I.pressUp

Press the &uarr; key.

This is same as using the command `I.press("ArrowUp")`.

### Usage
```javascript
I.pressUp()
```

---

## I.pressDown

Press the &darr; key.

This is same as using the command `I.press("ArrowDown")`.

### Usage
```javascript
I.pressDown()
```

---

## I.pressLeft

Press the &larr; key.

This is same as using the command `I.press("ArrowLeft")`.

### Usage
```javascript
I.pressLeft()
```

---

## I.pressRight

Press the &rarr; key.

This is same as using the command `I.press("ArrowRight")`.

### Usage
```javascript
I.pressRight()
```

---

## I.pressTab

Press the &rarr; key.

This is same as using the command `I.press("Tab")`.

### Usage
```javascript
I.pressTab()
```
