<?php

/**
 * @file
 * Template to display a view as a table.
 */
?>
<table<?php print $attributes; ?>>
  <?php if (!empty($title) || !empty($caption)): ?>
    <caption><?php print $caption . $title; ?></caption>
  <?php endif; ?>
  <?php if (!empty($header)): ?>
    <thead>
      <tr>
        <?php foreach ($header as $field => $label): ?>
          <th<?php print $header_attributes[$field]; ?>>
            <?php print $label; ?>
          </th>
        <?php endforeach; ?>
      </tr>
    </thead>
  <?php endif; ?>
  <tbody>
  <?php foreach ($rows as $row_number => $row): ?>
    <tr<?php if ($row_classes[$row_number]) print ' class="' . $row_classes[$row_number] .'"'; ?>>
      <?php foreach ($row as $field => $content): ?>
        <td<?php if ($field_classes[$field][$row_count]) { print ' class="'. $field_classes[$field][$row_count] . '" '; } ?><?php print drupal_attributes($field_attributes[$field][$row_count]); ?>>
          <?php print $content; ?>
        </td>
      <?php endforeach; ?>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
