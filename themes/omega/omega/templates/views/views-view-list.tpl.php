<?php

/**
 * @file
 * Template to display a list of rows.
 */
?>
<?php print $wrapper_prefix; ?>
<?php if (!empty($title)) : ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php print $list_type_prefix; ?>
<?php foreach ($rows as $row_number => $row): ?>
  <li<?php if ($row_classes[$row_number]) print ' class="' . $row_classes[$row_number] .'"'; ?>><?php print $row; ?></li>
<?php endforeach; ?>
<?php print $list_type_suffix; ?>
<?php print $wrapper_suffix; ?>
