import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-w"
  >
    <LogMonitor />
  </DockMonitor>
)
