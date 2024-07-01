import React from 'react';
import { PageContainerStyle } from '../utility/styles';
import Container from '../components/Container';

export function StylesExample() {
  return (
    <div className={PageContainerStyle}>
      <Container expand={true}>
        {/* Text Tags */}
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>This is a paragraph.</p> <br />
        <blockquote>This is a blockquote.</blockquote> <br />
        <pre>This is preformatted text.</pre> <br />
        <b>Bold text</b> <br />
        <i>Italic text</i> <br />
        <u>Underlined text</u> <br />
        <strong>Strong text</strong> <br />
        <em>Emphasized text</em> <br />
        <mark>Marked text</mark> <br />
        <small>Small text</small> <br />
        <del>Deleted text</del> <br />
        <ins>Inserted text</ins> <br />
        <sub>Subscript text</sub> <br />
        <sup>Superscript text</sup> <br />
        <code>Code text</code> <br />
        <a href="https://google.com">Link</a>
        {/* Form Tags */}
        <form>
          <label htmlFor="text">Text Input:</label>
          <input type="text" id="text" name="text" />
          <br />

          <label htmlFor="password">Password Input:</label>
          <input type="password" id="password" name="password" />
          <br />

          <label htmlFor="number">Number Input:</label>
          <input type="number" id="number" name="number" />
          <br />

          <label htmlFor="file">File Input:</label>
          <input type="file" id="file" name="file" />
          <br />

          <label htmlFor="range">Range Input:</label>
          <input type="range" id="range" name="range" />
          <br />

          <label htmlFor="textarea">Textarea:</label>
          <textarea id="textarea" name="textarea"></textarea>
          <br />

          <label htmlFor="select">Select:</label>
          <select id="select" name="select">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          <br />

          <label>Checkbox:</label>
          <input type="checkbox" name="checkbox" />
          <br />

          <label>Radio:</label>
          <input type="radio" name="radio" />
          <br />

          <button type="submit">Submit</button>
          <input type="reset" value="Reset" />
        </form>
        {/* Table Tags */}
        <table border={1}>
          <caption>Table Caption</caption>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
            </tr>
            <tr>
              <td>Data 3</td>
              <td>Data 4</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Footer 1</td>
              <td>Footer 2</td>
            </tr>
          </tfoot>
        </table>
        {/* List Tags */}
        <ul>
          <li>Unordered List Item 1</li>
          <li>Unordered List Item 2</li>
        </ul>
        <ol>
          <li>Ordered List Item 1</li>
          <li>Ordered List Item 2</li>
        </ol>
        <dl>
          <dt>Definition Term 1</dt>
          <dd>Definition Description 1</dd>
          <dt>Definition Term 2</dt>
          <dd>Definition Description 2</dd>
        </dl>
        {/* Media Tags */}
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <audio controls>
          <source src="audio-example.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <video controls width="250">
          <source src="video-example.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Interactive Tags */}
        <details>
          <summary>Details Summary</summary>
          <p>Details Content</p>
        </details>
        <dialog open>Dialog Content</dialog>
        <meter value="0.5">50%</meter>
        <progress value="50" max="100">
          50%
        </progress>
        {/* Embedded Content Tags */}
        <iframe
          src="https://www.example.com"
          title="Example Iframe"
          width="300"
          height="200"
        ></iframe>
        <object
          data="https://www.example.com"
          width="300"
          height="200"
        ></object>
        <embed src="https://www.example.com" width="300" height="200" />
        {/* Miscellaneous Tags */}
        <abbr title="Abbreviation">Abbr</abbr>
        <address>123 Main St, Anytown, USA</address>
        <cite>Citation</cite>
        <dfn>Definition</dfn>
        <kbd>Keyboard Input</kbd>
        <samp>Sample Output</samp>
        <time dateTime="2023-01-01T12:00">January 1, 2023</time>
        <var>Variable</var>
      </Container>
    </div>
  );
}
