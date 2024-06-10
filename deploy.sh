#!/bin/bash
# Source environment variables
if [ -f .env ]; then
  source .env
else
  echo ".env file not found!"
  exit 1
fi
export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;


echo Deploying to github pages

# Check if the build directory exists
if [ -d build ]; then
  rm -rf build
  if [ $? -ne 0 ]; then
    echo "Failed to remove old build files!"
    exit 1
  fi
fi

echo Pulling Github Pages repo into build
ls ./build

# Clone the GitHub Pages repository
git clone $GITHUB_PAGES_REPO build
if [ $? -ne 0 ]; then
  echo "Failed to clone the GitHub Pages repository!"
  exit 1
fi

# Install Node.js version 18
nvm install 18
nvm use 18

# Install dependencies and build
npm install
if [ $? -ne 0 ]; then
  echo "npm install failed!"
  exit 1
fi

npm run build
if [ $? -ne 0 ]; then
  echo "npm build failed!"
  exit 1
fi

cd ./build

# Configure Git user
git config user.name "$USERNAME"
git config user.email "$EMAIL"

# Add and commit changes
git add --all
git commit -m "$(date +'%Y-%m-%d %H:%M:%S')"
if [ $? -ne 0 ]; then
  echo "Git commit failed!"
  exit 1
fi

# Push changes
git push
if [ $? -ne 0 ]; then
  echo "Git push failed!"
  exit 1
fi

echo "Deployment to GitHub Pages completed successfully!"