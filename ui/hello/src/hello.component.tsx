import React from 'react'

export const Hello = ({ hello }: { hello?: string }) => (
  <i>{hello ?? 'GLOOMY HELLO WITHOUT TRANSLATION'}</i>
)
