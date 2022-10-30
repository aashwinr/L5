# Expand

1. Because using generic names may lead to conflicts in big projects, not to mention the ambiguity that'll arise from not knowing where the html elements originated from and how they have to be styled.
2. Data attributes are custom attributes mentioned with `<element_name data-attribute="">...</element_name>` are similar to the regular attributes. They have no special purpose apart from regular attributes, but they give semantic meaning to the code which is important in the readability of the code. This is contrasting with repurposing regular attributes for some custom functionality which massively reduces readability of the code.
3. It's a standalone node of a DOM that can then be attached to the main DOM tree. This is useful when we want to perform certain DOM functionalities without updating the main DOM tree to speed up the functionality.
4. Frameworks like React use virtual DOM to create a DOM representation in memory which are modified to then translate those modifications to the real dom. This speeds up code and prevent having to reprocess the entire dom.
5. `class` is a javascript keyword.
6. addEventListener is general and onClick is specific.
