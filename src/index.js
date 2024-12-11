import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import metadata from './block.json';
import Edit from './edit';
import Save from './save';

const accordionIcon = (
  <svg viewBox="0 0 24 24" width="24" height="24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path fill="#444" d="M0 4v8h16v-8h-16zM15 11h-14v-4h14v4z"></path> 
      <path fill="#444" d="M0 0h16v3h-16v-3z"></path> <path fill="#444" d="M0 13h16v3h-16v-3z"></path>
    </g>
  </svg>
);

registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
  icon: accordionIcon,
  save: Save,
} );
