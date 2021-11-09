const list = document.querySelector('body > main > div.listcontainer > ul');
        const input = document.querySelector('#favchap');
        const button = document.querySelector('body > main > div.input > button');

        button.onclick = function() {
          let myItem = input.value;
          input.value = '';

          const listItem = document.createElement('li');
          const listText = document.createElement('span');
          const listBtn = document.createElement('button');

          listItem.appendChild(listText);
          listText.textContent = myItem;
          listItem.appendChild(listBtn);
          listBtn.textContent = 'Delete';
          list.appendChild(listItem);

          listBtn.onclick = function(e) {
            list.removeChild(listItem);
          }

          input.focus();
        }
