--[[
    This file is a part of CheetoNotify project
    Credits: kali ($RevengeBack#4235)
    © Copyright 2023-2024 All rights reserved.
]]

CheetoNotify = {};

local function GetMinimapAnchor()
    local safezone = GetSafeZoneSize()
    local safezone_x = 1.0 / 20.0
    local safezone_y = 1.0 / 20.0
    local aspect_ratio = GetAspectRatio(0)
    local res_x, res_y = GetActiveScreenResolution()
    local xscale = 1.0 / res_x
    local yscale = 1.0 / res_y
    local Minimap = {}
    Minimap.width = xscale * (res_x / (4 * aspect_ratio))
    Minimap.height = yscale * (res_y / 5.674)
    Minimap.left_x = xscale * (res_x * (safezone_x * ((math.abs(safezone - 1.0)) * 10)))
    Minimap.bottom_y = 1.0 - yscale * (res_y * (safezone_y * ((math.abs(safezone - 1.0)) * 10)))
    Minimap.right_x = Minimap.left_x + Minimap.width
    Minimap.top_y = Minimap.bottom_y - Minimap.height
    Minimap.x = Minimap.left_x
    Minimap.y = Minimap.top_y
    Minimap.xunit = xscale
    Minimap.yunit = yscale
    return Minimap
end

---@public
---@param notificationData? { text?: string; duration?: number; image?: string; }
function CheetoNotify:show(notificationData)
    local payload = notificationData or {};
    payload.position = { x = (GetMinimapAnchor().x * 100), y = (GetMinimapAnchor().y * 30) }

    SendNUIMessage({
        name = 'showNotification',
        payload = payload
    })
end