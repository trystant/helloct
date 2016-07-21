#!/bin/bash

cat > "config.js" << EOF
/* SPHERE.IO credentials */
exports.config = {
  client_id: "${mKPAWp0Yy2-CMnXTGCykFbqr}",
  client_secret: "${DjItbv4ZQvMiSQG5PqWOQCL9uTGh4pSZ}",
  project_key: "${down-under}"
}
EOF

#create the symlinks for all dotfiles
declare -a targets=(simple express)
for i in "${targets[@]}"
do
  :
  echo "Symlinking $i/config.js"
  ln -sf `pwd`/config.js `pwd`/$i/config.js
done
