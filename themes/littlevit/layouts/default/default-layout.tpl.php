<div<?php print $attributes; ?>>

  <?php if ($page['topline']): ?>
    <div class="topline">
      <div class="topline__container">
        <?php print render($page['topline']); ?>
      </div>
    </div>
  <?php endif ?>

  <header class="header">
    <div class="header__container">

      <?php if ($site_name): ?>
        <div class="header__title">
          <h1>
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home">
              <span><?php print $site_name; ?></span>
            </a>
          </h1>
        </div>
      <?php endif; ?>

      <?php if ($site_slogan): ?>
        <div class="header__slogan"><?php print $site_slogan; ?></div>
      <?php endif; ?>

      <div class="branding">
        <?php if ($logo): ?>
          <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="site-logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" /></a>
        <?php endif; ?>

        <?php print render($page['branding']); ?>
      </div>

      <?php print render($page['header_nav']); ?>
    </div>

    <?php print render($page['header']); ?>
  </header>

  <?php if ($page['navigation']): ?>
    <nav class="nav">
      <div class="nav__container">
        <?php print render($page['navigation']); ?>
      </div>
    </nav>
  <?php endif ?>

  <div class="main">
    <div class="main__container">
      <div class="content" role="main">
        <?php print render($page['highlighted']); ?>

        <a id="main-content"></a>

        <?php print render($title_prefix); ?>

        <?php if ($title): ?>
        <div class="content__row">
          <h1 class="content__title"><?php print $title; ?></h1>
        </div>
        <?php endif; ?>

        <?php print render($title_suffix); ?>

        <?php if ($messages): ?>
        <div class="content__row">
          <?php print $messages; ?>
        </div>
        <?php endif; ?>

        <?php if ($action_links): ?>
          <ul class="action-links"><?php print render($action_links); ?></ul>
        <?php endif; ?>

        <?php print render($page['content']); ?>
      </div>

      <div class="sidebar">
        <?php print render($page['sidebar']); ?>
      </div>
    </div>
  </div>

  <footer class="footer">
    <div class="footer__container">
      <?php print render($page['footer']); ?>
    </div>
  </footer>
</div>
