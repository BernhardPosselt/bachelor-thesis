# Getting started

pacman -S kile
yaourt -S aur/latex-ieeetran
mkdir /usr/share/texmf-dist/bibtex/bst/ieee/
cp /usr/share/texmf/tex/latex/IEEEtran/bibtex/IEEEtran.bst /usr/share/texmf-dist/bibtex/bst/ieee/
texhash