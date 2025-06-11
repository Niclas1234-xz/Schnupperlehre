# 💻 HTML Spickzettel (Cheat Sheet)

## 📄 Dokumentstruktur

```html
<!DOCTYPE html>        <!-- Deklariert den Dokumenttyp (HTML5) -->
<html>                 <!-- Wurzelelement der HTML-Seite -->
  <head>               <!-- Beinhaltet Metadaten und Verlinkungen -->
  </head>
  <body>               <!-- Sichtbarer Inhalt der Webseite -->
  </body>
</html>
```

## ✍️ Textelemente

```html
<div >
<h1>Wilkommen aud der Webseite</h1>   <!-- Größte Überschrift -->
<h2>Schaue hier die besten Filme an</h2>   <!-- Zweitgrößte Überschrift -->
<h3>Nummer 1: Harry Potter 1</h3>
<h4>Nummer 2: Harry Potter 2</h4>
<h5>Überschrift 5</h5>
<h6>Dies sind die besten Filme laut ...</h6>   <!-- Kleinste Überschrift -->
</div>

<p>Absatztext</p>        <!-- Absatz -->

<br>                     <!-- Zeilenumbruch -->
<hr>                     <!-- Horizontale Linie -->

<strong>Fetter Text</strong>     <!-- Hebt Text fett hervor -->
<em>Kursiver Text</em>          <!-- Hebt Text kursiv hervor -->
<u>Unterstrichener Text</u>     <!-- Unterstreicht Text -->
<mark>Markierter Text</mark>    <!-- Hervorgehobener Text -->
```

## 📋 Listen

```html
<!-- Ungeordnete Liste (Aufzählung mit Punkten) -->
<ul>
  <li>Harry Potter 1</li>
  <li>Harry Potter 2</li>
  <li>Harry Potter 3</li>
</ul>

<!-- Geordnete Liste (numerierte Aufzählung) -->
<ol>
  <li>9 Fr.</li>
  <li>10 Fr.</li>
  <li>11 Fr.</li>
</ol>
```

## 🔗 Links und Bilder

```html
<!-- Hyperlink -->
<a href="https://www.netflix.com">Klicke hier um die besten Filme anzuschauen</a>

<!-- Bild einfügen -->
<img src="bild.jpg" alt="Beschreibung des Bildes">
```

## 📊 Tabellen

```html
<table>
  <tr>                 <!-- Tabellenzeile -->
    <th>Die Besten Filme</th>  <!-- Tabellenkopf -->
    <th>Überschrift 2</th>
  </tr>
  <tr>
    <td>Harry Potter</td>    <!-- Tabelleninhalt -->
    <td>Daten 2</td>
  </tr>
</table>
```

## 📝 Formulare

```html
<form>
  <!-- Texteingabefeld -->
  <input type="text" placeholder="Name eingeben">

  <!-- Passwortfeld -->
  <input type="password" placeholder="Passwort eingeben">

  <!-- Kontrollkästchen -->
  <input type="checkbox"> Angemeldet bleiben

  <!-- Optionsfeld -->
  <input type="radio" name="option"> Option 1

  <!-- Dropdown-Menü -->
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>

  <!-- Absende-Button -->
  <button type="submit">Absenden</button>
</form>
```

## 📦 Container-Elemente

```html
<div>Block-Element (Container für größere Inhalte)</div>
<span>Inline-Element (für einzelne Textteile)</span>
```

## Flexbox

Geh auf diese seite und lies sie durch:
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## 💬 Kommentare

```html
<!-- Dies ist ein HTML-Kommentar -->
```

## Mehr Tips und Tricks:

https://www.w3schools.com/html/default.asp