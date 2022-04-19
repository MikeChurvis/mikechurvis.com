# Why is this its own folder? Why aren't the specs with their components?

Because Astro currently has no way to ignore test files during its build step. Putting a test file with a Vitest dependency anywhere in `src/` breaks site generation.

I'm in talks with the devs to add some kind of ignore-by-file-pattern property to Astro.config. Until then, this is the best I can do.