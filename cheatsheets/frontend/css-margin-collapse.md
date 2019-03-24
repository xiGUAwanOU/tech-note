keywords css, margin, collapse, merge
labels css

# CSS Margin Collapse
Box margin will not be displayed in following situations:
* **Adjacent siblings**: the margins of adjacent siblings will collapse.
* **Parent and first/last child**: if there is no border, padding, or inline content to separate the margin-top of a block from the margin-top of its first child block; or no border, padding, inline content, height, min-height, or max-height to separate the margin-bottom of a block from the margin-bottom of its last child, then those margins collapse. The collapsed margin ends up outside the parent.
* **Empty blocks**: if there is no border, padding, inline content, height, or min-height to separate a block's margin-top from its margin-bottom, then its top and bottom margins collapse.