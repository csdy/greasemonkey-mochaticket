// ==UserScript==
// @name         GreaseMonkey - MochaTicket Theme Helper
// @namespace    https://github.com/csdy/
// @description  Applies CSS classes to MochaTicket used for theme hooks.
// @author       David Cassidy <davidcassidy@gmail.com
// @copyright    2019, David Cassidy. Some rights reserved.
// @homepage     https://github.com/csdy/greasemonkey-mochaticket
// @updateURL    https://raw.githubusercontent.com/csdy/greasemonkey-mochaticket/master/main.js
// @downloadURL  https://raw.githubusercontent.com/csdy/greasemonkey-mochaticket/master/main.js
// @supportURL   https://github.com/csdy/greasemonkey-mochaticket/issues
// @version      1.0.0
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/keymaster/1.6.1/keymaster.min.js
// @include      /^https?:\/\/support\.hostek\.com\/.*$/
// ==/UserScript==

$(function() {

  // Add body class
  var url = window.location.href;
  url = url.replace(/^https?:\/\/support\.hostek\.com/gi, '');
  var patterns = [
    {
      pattern: /^\/$/gi,
      class: 'page-ticket-submit'
    },
    {
      pattern: /^\/TicketLocator\.aspx.*$/gi,
      class: 'page-ticket-locator'
    },
    {
      pattern: /^\/ViewTicket\.aspx.*$/gi,
      class: 'page-ticket-view'
    },
    {
      pattern: /^\/Login\.aspx.*$/gi,
      class: 'page-agent-login'
    },
    {
      pattern: /^\/agent\/Tickets\.aspx\?section=queue.*$/gi,
      class: 'page-agent-queue'
    },
    {
      pattern: /^\/agent\/Tickets\.aspx\?section=recent-tickets.*$/gi,
      class: 'page-agent-recent'
    },
    {
      pattern: /^\/agent\/Tickets\.aspx\?section=my-queue.*$/gi,
      class: 'page-agent-my-queue'
    },
    {
      pattern: /^\/agent\/Tickets\.aspx\?section=my-recent-tickets.*$/gi,
      class: 'page-agent-my-recent'
    },
    {
      pattern: /^\/agent\/ViewTicket\.aspx.*$/gi,
      class: 'page-agent-ticket-view'
    },
    {
      pattern: /^\/service-pages\/GetEmailBody\.aspx.*view=TEXT.*$/gi,
      class: 'page-message-view-text'
    },
    {
      pattern: /^\/service-pages\/GetEmailBody\.aspx.*view=RAW.*$/gi,
      class: 'page-message-view-raw'
    },
    {
      pattern: /^\/service-pages\/GetEmailBody\.aspx.*view=HTML.*$/gi,
      class: 'page-message-view-html'
    },
    {
      pattern: /^\/service-pages\/GetChatView\.aspx.*view=CHAT.*$/gi,
      class: 'page-message-view-chat'
    },
    {
      pattern: /^\/agent\/ViewTicketNote\.aspx.*$/gi,
      class: 'page-agent-ticket-notes'
    },
    {
      pattern: /^\/agent\/ChangeTag\.aspx.*$/gi,
      class: 'page-agent-ticket-tag'
    },
    {
      pattern: /^\/agent\/ReplyTicket\.aspx.*$/gi,
      class: 'page-agent-ticket-reply'
    },
    {
      pattern: /^\/agent\/Transfer\.aspx.*$/gi,
      class: 'page-agent-ticket-transfer'
    },
    {
      pattern: /^\/agent\/DeleteTicket\.aspx.*$/gi,
      class: 'page-agent-ticket-delete'
    },
    {
      pattern: /^\/agent\/SearchTickets\.aspx.*$/gi,
      class: 'page-agent-ticket-search'
    },
    {
      pattern: /^\/agent\/Mailin\.aspx.*$/gi,
      class: 'page-agent-ticket-inbound'
    },
    {
      pattern: /^\/agent\/Mailout\.aspx.*$/gi,
      class: 'page-agent-ticket-outbound'
    },
    {
      pattern: /^\/agent\/GlobalResponseList\.aspx.*$/gi,
      class: 'page-agent-response-list'
    },
    {
      pattern: /^\/agent\/GlobalResponse\.aspx.*$/gi,
      class: 'page-agent-response-new'
    },
    {
      pattern: /^\/agent\/Contacts\.aspx.*$/gi,
      class: 'page-agent-contacts'
    },
    {
      pattern: /^\/agent\/Profile\.aspx.*$/gi,
      class: 'page-agent-profile'
    },
    {
      pattern: /^\/agent\/Notification\.aspx.*$/gi,
      class: 'page-agent-notification'
    },
    {
      pattern: /^\/agent\/Settings\.aspx.*$/gi,
      class: 'page-agent-settings'
    }
  ];
  var pattern = null;
  for (var i = 0; i < patterns.length; i++) {
    if (url.match(patterns[i].pattern)) {
      pattern = patterns[i];
    }
  }
  $('body').addClass(pattern.class);

  // Add sidebar toggle button
  $('#header > .nav').prepend('<li><a id="toggle-sidebar"></a></li>');
  var sidebarWidth = $('#sidebar').outerWidth();
  $('body').append(
    '<style>' +
      '#header > .nav > li { float: left; }' +
      '#toggle-sidebar { background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgNmgtMjR2LTRoMjR2NHptMCA0aC0yNHY0aDI0di00em0wIDhoLTI0djRoMjR2LTR6IiBzdHlsZT0iZmlsbDogI2ZmZjsiIC8+PC9zdmc+) no-repeat center; background-size: 12px 24px; cursor: pointer; height: 24px; padding-right: 0 !important; width: 24px; }' +
      '#content { margin-left: 0 !important; }' +
      '#content #header { margin-left: 0 !important; }' +
      '.sidebarPaddingUncollapsed, .sidebarPaddingUncollapsed > #header { margin-left: 0 !important; }' +
      '.sidebar-toggle { height: 100vh !important; left: -' + sidebarWidth + 'px !important; position: fixed !important; top: 0 !important; }' +
      '.sidebar-shown #content { margin-left: ' + sidebarWidth + 'px !important; }' +
      '.sidebar-shown #content #header { margin-left: ' + sidebarWidth + 'px !important; }' +
      '.sidebar-shown .sidebarPaddingUncollapsed, .sidebar-shown .sidebarPaddingUncollapsed > #header { margin-left: ' + sidebarWidth + 'px !important; }' +
      '.sidebar-shown .sidebar-toggle { left: 0px !important; }' +
    '</style>'
  );
  $('#sidebar').addClass('sidebar-toggle');
  $('#toggle-sidebar').click(function() {
    $('body').toggleClass('sidebar-shown');
  });

  // Keyboard Shortcut: Toggle sidebar
  key('ctrl+alt+1', function() {
    $('body').toggleClass('sidebar-shown');
  });

  // Keyboard Shortcut: Toggle dark theme
  key('ctrl++alt+2', function() {
    $('body').toggleClass('theme-dark');
  });

});
