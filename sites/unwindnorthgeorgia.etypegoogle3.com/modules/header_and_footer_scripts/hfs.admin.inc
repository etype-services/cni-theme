<?php

/**
 * @file
 * Administrative page code for the Header Footer Script module.
 */

/**
 * Administrative settings.
 *
 * @return array
 *   Add styles and scripts in header.
 */
function hfs_header_settings($form, &$form_state) {
  $header_section = variable_get('header_and_footer_scripts_header_settings');

  $form['header_and_footer_scripts_header'] = array(
    '#type'         => 'fieldset',
    '#title'        => t('Add Scripts and Styles in Header'),
    '#description'  => t('All the defined scripts and styles in this section would be added under the <strong>head</strong> tag.'),
  );

  $form['header_and_footer_scripts_header']['styles'] = array(
    '#type'          => 'textarea',
    '#title'         => t('Header Styles'),
    '#default_value' => isset($header_section['styles']) ? $header_section['styles'] : '',
    '#description'   => t('<p>You can add multiple <strong>stylesheets</strong> here with multiple ways, For example: </p><p>1. &lt;link type="text/css" rel="stylesheet" href="http://www.example.com/style.css" media="all" /&gt;</p><p> 2. &lt;link type="text/css" rel="stylesheet" href="/style.css" media="all" /&gt;</p><p> 3. &lt;style&gt;#header { color: grey; }&lt;/style&gt;</p>'),
    '#rows'          => 10,
  );

  $form['header_and_footer_scripts_header']['scripts'] = array(
    '#type'          => 'textarea',
    '#title'         => t('Header Scripts'),
    '#default_value' => isset($header_section['scripts']) ? $header_section['scripts'] : '',
    '#description'   => t('<p>You can add multiple <strong>scripts</strong> here with multiple ways, For example: </p><p>1. &lt;script type="text/javascript" src="http://www.example.com/script.js"&gt;&lt;/script&gt;</p><p> 2. &lt;script type="text/javascript" src="/script.js"&gt;&lt;/script&gt;</p><p> 3. &lt;script type="text/javascript"&gt;&lt;!--//--&gt;&lt;![CDATA[//&gt;&lt;!--// close script tag //--&gt;&lt;!]]&gt;&lt;/script&gt;</p>'),
    '#rows'          => 10,
  );

  $form['submit'] = array(
    '#type'  => 'submit',
    '#value' => 'Save Header Settings',
  );

  return $form;
}

/**
 * Submit handler().
 */
function hfs_header_settings_submit($form, &$form_state) {
  $header['styles'] = $form_state['values']['styles'];
  $header['scripts'] = $form_state['values']['scripts'];
  variable_set('header_and_footer_scripts_header_settings', $header);
}

/**
 * Administrative settings.
 *
 * @return array
 *   Add styles and scripts at the start of the body tag.
 */
function hfs_body_settings($form, &$form_state) {
  $body_section = variable_get('header_and_footer_scripts_body_settings');

  $form['header_and_footer_scripts_body'] = array(
    '#type'        => 'fieldset',
    '#title'       => t('Add Scripts and Styles in body'),
    '#description' => t('All the defined scripts and styles in this section would be added next to <strong>body</strong> tag.'),
  );

  $form['header_and_footer_scripts_body']['styles'] = array(
    '#type'          => 'textarea',
    '#title'         => t('Body Styles'),
    '#default_value' => isset($body_section['styles']) ? $body_section['styles'] : '',
    '#description'   => t('<p>You can add multiple <strong>stylesheets</strong> here with multiple ways, For example: </p><p>1. &lt;link type="text/css" rel="stylesheet" href="http://www.example.com/style.css" media="all" /&gt;</p><p> 2. &lt;link type="text/css" rel="stylesheet" href="/style.css" media="all" /&gt;</p><p> 3. &lt;style&gt;#header { color: grey; }&lt;/style&gt;</p>'),
    '#rows'          => 10,
  );

  $form['header_and_footer_scripts_body']['scripts'] = array(
    '#type'          => 'textarea',
    '#title'         => t('Body Scripts'),
    '#default_value' => isset($body_section['scripts']) ? $body_section['scripts'] : '',
    '#description'   => t('<p>On mostly sites, this section is used to add the <strong>Google Tag Manager</strong>. <strong>Like:</strong></p><p>1. &lt;!-- Google Tag Manager --&gt;&lt;noscript&gt;<strong>Write Your code here</strong>&lt;/script&gt;&lt;!-- End Google Tag Manager --&gt;</p><p>You can also add multiple <strong>scripts</strong> here with multiple ways, For example: </p><p>1. &lt;script type="text/javascript" src="http://www.example.com/script.js"&gt;&lt;/script&gt;</p><p> 2. &lt;script type="text/javascript" src="/script.js"&gt;&lt;/script&gt;</p><p> 3. &lt;script type="text/javascript"&gt;&lt;!--//--&gt;&lt;![CDATA[//&gt;&lt;!--// close script tag //--&gt;&lt;!]]&gt;&lt;/script&gt;</p>'),
    '#rows'          => 10,
  );

  $form['submit'] = array(
    '#type'  => 'submit',
    '#value' => 'Save Body Settings',
  );

  return $form;
}

/**
 * Submit handler().
 */
function hfs_body_settings_submit($form, &$form_state) {
  $body['styles'] = $form_state['values']['styles'];
  $body['scripts'] = $form_state['values']['scripts'];
  variable_set('header_and_footer_scripts_body_settings', $body);
}

/**
 * Administrative settings.
 *
 * @return array
 *   Add styles and scripts in footer (before closing the body tag).
 */
function hfs_footer_settings($form, &$form_state) {
  $footer_section = variable_get('header_and_footer_scripts_footer_settings');

  $form['header_and_footer_scripts_footer'] = array(
    '#type'        => 'fieldset',
    '#title'       => t('Add Scripts and Styles in Footer'),
    '#description' => t('All the defined scripts and styles in this section would be added just before closing the <strong>body</strong> tag.'),
  );

  $form['header_and_footer_scripts_footer']['styles'] = array(
    '#type'          => 'textarea',
    '#title'         => t('Footer Styles'),
    '#default_value' => isset($footer_section['styles']) ? $footer_section['styles'] : '',
    '#description'   => t('<p>You can add multiple <strong>stylesheets</strong> here with multiple ways, For example: </p><p>1. &lt;link type="text/css" rel="stylesheet" href="http://www.example.com/style.css" media="all" /&gt;</p><p> 2. &lt;link type="text/css" rel="stylesheet" href="/style.css" media="all" /&gt;</p><p> 3. &lt;style&gt;#header { color: grey; }&lt;/style&gt;</p>'),
    '#rows'          => 10,
  );

  $form['header_and_footer_scripts_footer']['scripts'] = array(
    '#type'          => 'textarea',
    '#title'         => t('Footer Scripts'),
    '#default_value' => isset($footer_section['scripts']) ? $footer_section['scripts'] : '',
    '#description'   => t('<p>You can add multiple <strong>scripts</strong> here with multiple ways, For example: </p><p>1. &lt;script type="text/javascript" src="http://www.example.com/script.js"&gt;&lt;/script&gt;</p><p> 2. &lt;script type="text/javascript" src="/script.js"&gt;&lt;/script&gt;</p><p> 3. &lt;script type="text/javascript"&gt;&lt;!--//--&gt;&lt;![CDATA[//&gt;&lt;!--// close script tag //--&gt;&lt;!]]&gt;&lt;/script&gt;</p>'),
    '#rows'          => 10,
  );

  $form['submit'] = array(
    '#type'  => 'submit',
    '#value' => 'Save Footer Settings',
  );

  return $form;
}

/**
 * Submit handler().
 */
function hfs_footer_settings_submit($form, &$form_state) {
  $footer['styles'] = $form_state['values']['styles'];
  $footer['scripts'] = $form_state['values']['scripts'];
  variable_set('header_and_footer_scripts_footer_settings', $footer);
}
