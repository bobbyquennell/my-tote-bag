
# How to add local dependencies with Lerna

add local @shared/ui-components with lerna `add` cmd:

- `add` cmd will also update the version of your dependencies
- If @shared/ui-components updated from `0.0.1` to `0.0.2`, you just need to run below cmd again, then `admin-ui` will get the latest version of `@shared/ui-components`

 ```script
 npx lerna add @shared/ui-components packages/admin-ui
 ```
