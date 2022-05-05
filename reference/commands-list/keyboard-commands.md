# Keyboard commands



These commands trigger a keypress on the keyboard.

### List of commands <a href="#list-of-commands" id="list-of-commands"></a>

| Command                                                                                                                                              | Description                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| <p><a href="keyboard-commands.md#itype--ipress"><code>I.type</code></a><br><a href="keyboard-commands.md#itype--ipress"><code>I.press</code></a></p> | Press a key or a string of keys |
| [`I.pressEnter`](keyboard-commands.md#ipressenter)                                                                                                   | Press the `Enter` key           |
| [`I.pressUp`](keyboard-commands.md#ipressup)                                                                                                         | Press the ↑ key                 |
| [`I.pressDown`](keyboard-commands.md#ipressdown)                                                                                                     | Press the ↓ key                 |
| [`I.pressLeft`](keyboard-commands.md#ipressleft)                                                                                                     | Press the ← key                 |
| [`I.pressRight`](keyboard-commands.md#ipressright)                                                                                                   | Press the → key                 |
| [`I.pressTab`](keyboard-commands.md#ipresstab)                                                                                                       | Press the `Tab` key             |

***

### I.type / I.press <a href="#itype--ipress" id="itype--ipress"></a>

Press a key or a string of keys.

This will send keyboard inputs to the element in focus, or the page \<body> if no element is focus.

> `I.press` and `I.type` are exactly the same thing - we simply provided these two versions for whichever linguistic preference you have.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.type(key)
I.press(key)
```

**Parameters**

| Parameter | Type                              | Remarks         |
| --------- | --------------------------------- | --------------- |
| key       | <p>string<br>array of strings</p> | Key(s) to press |

#### Examples <a href="#examples" id="examples"></a>

**Text input**

> Note that `I.fill(field, value)` is recommended over `I.type(value)` for entering text into input fields

```javascript
I.type("hello") // this will send "h" "e" "l" "l" "o"
```

**Press a key**

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

**Press a chord (send multiple keys simultaneously)**

```javascript
// Send a chord (press multiple keys at the same time)
I.press(["Shift", "a"])
I.press(["Alt", "A"]) 
I.press(["Control", "A"])
I.press(["Meta", "A"])
I.press(["Shift", "Control", "A"])
```

***

### I.pressEnter <a href="#ipressenter" id="ipressenter"></a>

Press the `Enter` key.

This is same as using the command `I.press("Enter")`.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.pressEnter()
```

***

### I.pressUp <a href="#ipressup" id="ipressup"></a>

Press the ↑ key.

This is same as using the command `I.press("ArrowUp")`.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.pressUp()
```

***

### I.pressDown <a href="#ipressdown" id="ipressdown"></a>

Press the ↓ key.

This is same as using the command `I.press("ArrowDown")`.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.pressDown()
```

***

### I.pressLeft <a href="#ipressleft" id="ipressleft"></a>

Press the ← key.

This is same as using the command `I.press("ArrowLeft")`.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.pressLeft()
```

***

### I.pressRight <a href="#ipressright" id="ipressright"></a>

Press the → key.

This is same as using the command `I.press("ArrowRight")`.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.pressRight()
```

***

### I.pressTab <a href="#ipresstab" id="ipresstab"></a>

Press the → key.

This is same as using the command `I.press("Tab")`.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.pressTab()
```
