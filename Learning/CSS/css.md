## 🧩 **1. Inline CSS**

Yeh sabse basic aur quick method hai.
Aap HTML tag ke andar hi `style` attribute likh kar CSS add karte ho.

### 🔹 Example:

```html
<h1 style="color: blue; text-align: center;">Hello World!</h1>
```

### 📘 Explanation:

* Sirf **usi tag** par apply hoti hai.
* Jaldi test karne ke liye useful hai.
* Lekin **maintain karna difficult** hota hai (kyunki sab CSS HTML ke andar mil jaati hai).

---

## 🧱 **2. Internal CSS (Embedded CSS)**

Yeh method HTML file ke `<head>` tag ke andar `<style>` tag ke through hoti hai.

### 🔹 Example:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: green;
      text-align: center;
    }
    p {
      font-size: 18px;
      color: gray;
    }
  </style>
</head>
<body>
  <h1>Hello World</h1>
  <p>This is an internal CSS example.</p>
</body>
</html>
```

### 📘 Explanation:

* Sirf **ek HTML page** ke liye style apply hoti hai.
* Small projects ke liye perfect.
* But agar aapke paas multiple pages hain, toh bar-bar likhna padta hai.

---

## 🌐 **3. External CSS (Linked CSS)**

Yeh **best practice** hai real-world projects ke liye 😎
Aap CSS ko ek **alag file (.css)** me likhte ho aur usse HTML file me link karte ho.

### 🔹 Example:

**HTML file (index.html):**

```html
<link rel="stylesheet" href="style.css">
<h1>Hello World!</h1>
<p>This is external CSS.</p>
```

**CSS file (style.css):**

```css
h1 {
  color: purple;
  text-align: center;
}
p {
  color: darkgray;
  font-size: 20px;
}
```

### 📘 Explanation:

* **Multiple pages** me same CSS file use kar sakte ho.
* Code clean aur maintainable rehta hai.
* Yehi method **production websites** me use hota hai.

---

## ⚙️ **4. (Bonus) Import Method**

Yeh thoda advanced hai — CSS file ke andar hi ek aur CSS file ko import karne ke liye.

### 🔹 Example:

**main.css**

```css
@import url("colors.css");

body {
  font-family: Arial, sans-serif;
}
```

**colors.css**

```css
h1 {
  color: teal;
}
```

### 📘 Explanation:

* Useful jab CSS ko parts me divide karna ho.
* Lekin performance thoda slow ho sakta hai (kyunki ek extra request lagti hai).

---

## ⚡ Summary Table:

| Method   | Tag/Keyword | Scope          | Use Case          |
| -------- | ----------- | -------------- | ----------------- |
| Inline   | `style=""`  | Single element | Quick testing     |
| Internal | `<style>`   | One page       | Small projects    |
| External | `<link>`    | Multiple pages | Best for websites |
| Import   | `@import`   | Inside CSS     | Modular styling   |

---

### 🧠 Remember:

✅ Always keep order like this:
```html
<html>
  <head>
    <title>...</title>
    <style>...</style>
  </head>
  <body>...</body>
</html>
```