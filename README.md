# CheetoNotify
CheetoNotify is a NUI notifications scripts that runs using Vue & vite, you can set multiple parameters like title, text, image, duration etc.. (wip)

# How to use
If you want to add your images, just add em to /web/src/assets/images/ and thats it, for exemple at image parameter -> "image.png"; or you can also let it undefined for no image 

In an other resource fom client-side you can use thoses exports:
- Show notification
```lua
exports.CheetoNotify:showNotification(notificationData: INotification);
```

# Exemple
```lua
exports.CheetoNotify:showNotification({
    title = 'Information',
    text = 'this is a text',
    duration = 6000,
    image = 'image.png',
    color = { r = 92, g = 65, b = 229  },
    settings = {
        enableSeparator = true
    }
})
```

# Informations
This is resource hasn't got tested so it might has bugs etc.. you can report them or open issues thanks

# Previews
![Preview_1](https://media.discordapp.net/attachments/854756500034945075/1149707578436235284/image.png)

![Preview_2](https://cdn.discordapp.com/attachments/854756500034945075/1149707658530668564/image.png)

![Preview_3](https://cdn.discordapp.com/attachments/854756500034945075/1149781857127366797/image.png)

&nbsp;

© 2023-2024 RevengeBack. All rights reserved.