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

- All project cards share a responsive three-image gallery with selectable thumbnails, so image presentation stays consistent across categories.
- Page-spanning decorative lines use a pointer-transparent SVG measured with ResizeObserver and anchored to the device artwork, in an isolated layer below main and footer; deterministic routes avoid jumps on resize without scroll listeners.
