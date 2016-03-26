var { PanelView } = require("jetpack-panelview");
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
const name = "lightweightThemes.selectedThemeID";
const selectedThemeID = require("sdk/preferences/service").get(name);

var pv = PanelView({
        id: 'demo-panelview',
        title: 'Demo',
        content: [
          {
              type: 'button',
              label: 'Eventos',
              onClick: function(event) {
                  tabs.open("http://loco.ubuntu.com/teams/ubuntu-ve/");
              }
          },
          {
              type: 'button',
              label: 'Launchpad',
              onClick: function(event) {
                  tabs.open("https://launchpad.net/~ubuntu-ve");
              }
          },
          {
              type: 'button',
              label: 'Lista de Correos',
              onClick: function(event) {
                  tabs.open("https://lists.ubuntu.com/mailman/listinfo/ubuntu-ve");
              }
          },
          {
              type: 'button',
              label: 'Wiki',
              onClick: function(event) {
                  tabs.open("https://wiki.ubuntu.com/VenezuelaTeam");
              }
          },
          {
              type: 'separator'
          },
          {
              type: 'button',
              label: 'Nuestra Comunidad',
              onClick: function(event) {
                  tabs.open("http://www.ubuntu.org.ve/nuestracomunidad");
              }
          },
          {
              type: 'button',
              label: 'Constribuye',
              onClick: function(event) {
                  tabs.open("http://www.ubuntu.org.ve/contribuye");
              }
          },
          {
              type: 'button',
              label: 'Web Radio',
              onClick: function(event) {
                  tabs.open("http://www.ubuntu.org.ve/radio");
              }
          },
          {
              type: 'button',
              label: 'IRC',
              onClick: function(event) {
                  tabs.open("http://www.ubuntu.org.ve/chat");
              }
          },
          {
              type: 'separator'
          },
          {
              type: 'button',
              label: 'Google Plus',
              onClick: function(event) {
                  tabs.open("https://plus.google.com/118200437352168082579");
              }
          },
          {
              type: 'button',
              label: 'Twitter',
              onClick: function(event) {
                  tabs.open("https://twitter.com/ubuntu_ve");
              }
          },
          {
              type: 'button',
              label: 'Facebook',
              onClick: function(event) {
                  tabs.open("https://www.facebook.com/ubuntuve/");
              }
          },
          {
              type: 'separator'
          },
          {
              type: 'button',
              label: 'Grupo en Telegram',
              onClick: function(event) {
                  tabs.open("http://telegram.me/ubuntuve");
              }
          }
        ],
        footer: {
            label: 'Sitio Web',
            onClick: function(event) {
                tabs.open("http://ubuntu.org.ve/");
            }
        }
    });

    var button = buttons.ActionButton({
      id: "ubuntu-button",
      label: "Ubuntu Venezuela",
      icon: {
        "16": selectedThemeID === "firefox-devedition@mozilla.org" ?
          "./icon-16.dev.svg" : "./icon-16.svg",
        "32": "./icon-32.svg",
        "64": "./icon-64.svg"
      },
        onClick: function(state){
            pv.show(button);
        }
    });
