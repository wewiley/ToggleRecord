const xapi = require('xapi');

const START_RECORDING = '*9';
const STOP_RECORDING = '#9';

xapi.event.on('UserInterface Extensions Widget Action', (event) => {
  if (event.WidgetID === 'widget_1' && event.Type === 'pressed'); 
    xapi.command('Call DTMFSend', { DTMFString: START_RECORDING});
  if (event.WidgetID === 'widget_1' && event.Type === 'released');
    xapi.command('Call DTMFSend', { DTMFString: STOP_RECORDING});
});