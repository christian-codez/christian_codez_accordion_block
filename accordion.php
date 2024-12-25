<?php
/**
 * Plugin Name:       Accordion Block
 * Description:       A customizable accordion block for displaying collapsible content sections.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            Christian Codez
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       christian-codez-accordion
 *
 * @package ChristianCodez
 */

if ( ! defined( 'ABSPATH' ) ) {
  exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function christian_codez_accordion_block_init() {
  register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'christian_codez_accordion_block_init' );


add_filter( 'block_categories_all', function( $categories, $post ) {
  foreach ( $categories as $category ) {
    if ( $category['slug'] === 'christian-codez' ) {
      return $categories;
    }
  }

  return array_merge(
    [
      [
        'slug'  => 'christian-codez',
        'title' => __( 'Christian Codez', 'christian-codez-accordion' ),
      ],
    ],
    $categories
  );
}, 10, 2 );
