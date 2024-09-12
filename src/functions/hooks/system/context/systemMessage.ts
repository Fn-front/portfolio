import React from 'react'

export const SystemMessageContext = React.createContext(
  {} as {
    setMessage: React.Dispatch<React.SetStateAction<string>>
    setType: React.Dispatch<React.SetStateAction<string>>
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
  },
)
