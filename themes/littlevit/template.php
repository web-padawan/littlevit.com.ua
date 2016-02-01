<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * littlevit theme.
 */

/**
 * Implements THEME_omega_layout_alter().
 */
function littlevit_omega_layout_alter(&$layout) {

  if (arg(0) == 'node' && is_numeric(arg(1))) {
    $nid = arg(1);
    $node = node_load($nid);
    if (isset($node) && $node->type == 'page') {
      if ((string) $nid == '1') {
        $layout = 'front';
        drupal_add_js(drupal_get_path('theme', 'littlevit') . '/js/lib/jqModal.min.js');
        drupal_add_js(drupal_get_path('theme', 'littlevit') . '/js/lib/jquery.singlePageNav.min.js');
      }
    }
  }
}
