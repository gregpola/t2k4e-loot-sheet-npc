export const MODULE = {
    appIds: {
        lootsheet: 'lootsheetnpct2k4e',
        lootsheetSettings: 'lootsheetnpct2k4e-lootsheet-settings',
        ruleEditor: 'lootsheetnpct2k4e-rule-editor',
    },
    flags: {
        rolltable: 'rolltable',
        loot: 'loot',
        itemQty: 'itemQty',
        itemQtyLimit: 'itemQtyLimit',
        clearInventory: 'clearInventory',
        default:{
            lootsheetnpct2k4e: {
                lootsheettype: "Loot",
                rolltable: "",
                itemQty: "",
                itemQtyLimit: "",
                clearInventory: false,
                permissionsFilter: false,
                darkMode: true,
                sheettint: {
                    value: "#000000",
                    alpha: 0.5,
                    style: "none",
                    blendmode: "difference"
                },
                avatartint: {
                    value: "#000000",
                    alpha: 0.5
                }
            }
        }
    },
    ns: 't2k4e-loot-sheet-npc',
    path: 'modules/t2k4e-loot-sheet-npc',
    templatePath: 'modules/t2k4e-loot-sheet-npc/templates',
    templateAppsPath: 'modules/t2k4e-loot-sheet-npc/templates/apps',
    templatePartialsPath: 'modules/t2k4e-loot-sheet-npc/templates/partials',
    socket: 'module.t2k4e-loot-sheet-npc',
    sockettypes: {
        lootItem: 'lootItem',
        lootAll: 'lootAll',
        buyItem: 'buyItem',
        tradeItems: 'tradeItems',
        buyAll: 'buyAll',
        sheetUpdate: 'sheetUpdate'
    },
    sheets: {
        loot: 'loot',
        account: 'account',
        object: 'object',
    },
    settings: {
        scopes: {
            world: 'world',
            client: 'client',
            default: 'defaults'
        },
        groups: {
            sheet: {
                moduleDefaults: 'moduleDefaults',
                ui: 'UI',
                loot: 'Loot'
            }
        },
        keys: {
            common: {
                useBetterRolltables: 'useBetterRolltables',
                autoCheckUpdates: 'autoCheckUpdates',
                addInterfaceButtons: 'addInterfaceButtons'
            },
            sheet: {
                advancedOptions: 'advancedSheetOptions',
                buyItem: 'buyItem',
                buyAll: 'buyAll',
                chatGracePeriod: 'chatGracePeriod',
                priceModifier: 'priceModifier',
                generateChatMessages: 'generateChatMessages',
                lootAll: 'lootAll',
                lootItem: 'lootItem',
                sheetUpdate: 'sheetUpdate',
                maxPriceIncrease: 'maxPriceIncrease',
                reduceUpdateVerbosity: 'reduceUpdateVerbosity',
                stackBuyConfirm: 'stackBuyConfirm',
                showStackWeight: 'showStackWeight',
                tradeItems: 'tradeItems'
            },
            lootseeder: {
                seederOptions: 'seederOptions',
                autoSeedTokens: 'autoSeedTokens',
                creatureTypeFallbacks: 'creatureTypeFallbacks',
                customFallbackSwitch: 'customFallbackSwitch',
                customFallbacks: 'customFallbacks',
                rulesets: 'rulesets',
                fallbackRolltable: 'fallbackRolltable',
                fallbackShopQty: 'fallbackShopQty',
                fallbackItemQty: 'fallbackItemQty',
                fallbackItemQtyLimit: 'fallbackItemQtyLimit',
                generateCurrency: 'generateCurrency',
                lootCurrencyDefault: 'lootCurrencyDefault',
                useRulesets: 'useRulesets',
                useSkiplist: 'useSkiplist'
            }
        }
    }
};
