#mitrofan-corporation

Нужно установить Volta, если нет:
https://docs.volta.sh/guide/getting-started

Затем pnpm =>
volta install corepack
corepack enable
corepack prepare pnpm@latest --activate
Если работает корректно, то pnpm -v выдаст версию.

Затем => pnpm i

Затем => npm start