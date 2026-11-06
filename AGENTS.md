<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Imported website
- Keep imported page markup and interaction state in its route file and preserve source wrappers; this maintains captured selector compatibility.
- Keep source CSS and downloaded assets, with focused repairs in a separate stylesheet; this preserves the reference cascade.
- Secondary content routes reuse the imported presentation exported by the homepage route; this keeps captured wrappers and interactions consistent without duplicating markup.
- Opening-section photography uses CDN asset pointers and the existing imported wrappers; photo selection and carousel state stay in the shared homepage presentation to keep navigation consistent.
