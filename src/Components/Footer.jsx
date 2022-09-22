import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer
        id="footer"
        className="footer footer-center gap-2 py-4 xs2:p-4 bg-base-200 text-base-content rounded"
        >
        <div className="grid grid-flow-col gap-2 xs:gap-4">
            <a className="link link-hover hover:text-[#00ff88]">
                <Link to="/Curriculo" target="_blank">Currículo</Link>
            </a>
            <a
            className="link link-hover hover:text-[#00ff88]" target="_blank"
            href="https://www.linkedin.com/in/alan-stall-b722a962/"
            >
            Contato
            </a>
            <a className="link link-hover hover:text-[#00ff88]" target="_blank" href="https://github.com/AlanStall/practice-english">
            Código Fonte
            </a>
        </div>

        <div className="grid grid-flow-col gap-2">
            <a href="https://github.com/AlanStall" target="_blank" title="GitHub">
            <button className="btn-outline btn-success rounded-md" aria-label="GitHub">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="45"
                viewBox="0 0 24 24"
                className="fill-current h-7 xs:h-8 sm:h-10"
                >
                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
                </svg>
            </button>
            </a>
            <a href="https://www.linkedin.com/in/alan-stall-b722a962/" target="_blank" title="LinkedIn">
            <button className="btn-outline btn-success rounded-md" aria-label="LinkedIn">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="45"
                viewBox="0 0 382 382"
                className="fill-current h-7 xs:h-8 sm:h-10"
                >
                <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654L341.91,330.654z"></path>
                </svg>
            </button>
            </a>
        </div>

        <div>
            <div className="grid grid-flow-col gap-1">
                <p className="pt-1">e-mail: alan_kstall@hotmail.com</p>
                <CopyToClipboard text="alan_kstall@hotmail.com">
                    <button className="btn btn-outline btn-sm mt-3 xs:btn-xs xs:mt-0">Copiar e-mail</button>
                </CopyToClipboard>
            </div>
            <p className="developed">Copyright © 2022 - Desenvolvido por Alan Stall</p>
        </div>
    </footer>
  );
}


