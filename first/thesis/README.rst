How to compile on Arch Linux
============================
To get the required dependency you'll need to install the latex-ieeetran packages from AUR::

  yaourt -S aur/latex-ieeetran

  sudo mkdir /usr/share/texmf-dist/bibtex/bst/ieee/
  sudo cp /usr/share/texmf/tex/latex/IEEEtran/bibtex/IEEEtran.bst /usr/share/texmf-dist/bibtex/bst/ieee/
  sudo texhash

Then the pdf can be compiled by running::

  make

in the src directory.