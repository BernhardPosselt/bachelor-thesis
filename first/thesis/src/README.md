# How to compile on Arch Linux

  yaourt -S aur/latex-ieeetran
  
  sudo mkdir /usr/share/texmf-dist/bibtex/bst/ieee/
  sudo cp /usr/share/texmf/tex/latex/IEEEtran/bibtex/IEEEtran.bst /usr/share/texmf-dist/bibtex/bst/ieee/
  sudo texhash