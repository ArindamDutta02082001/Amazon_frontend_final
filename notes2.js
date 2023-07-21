const note_no = localStorage.getItem("note_no");
const note_desc = JSON.parse(localStorage.getItem("note_desc"));
const note_id = JSON.parse(localStorage.getItem("note_id"));

// variables
const n_id = [];
const n_no = [];
const n_desc = [];

const last = document.getElementById("last");

if (note_id == null && note_no == null && note_desc == null) {
  last.innerText = "Please Insert Notes ! Nothing to show";
  localStorage.setItem("note_no", "0");
  //   window.location.reload()
} else if (note_id != null && note_no != null && note_desc != null) {
  disp_items();
}

function disp_items() {
  const note_no3 = localStorage.getItem("note_no");
  const note_desc3 = JSON.parse(localStorage.getItem("note_desc"));
  const note_id3 = JSON.parse(localStorage.getItem("note_id"));
  //   console.log(note_desc3[])
  if (note_id3 != null || note_no3 != null || note_desc3 != null) {
    for (let i = 0; i < note_no3; i++) {
      last.insertAdjacentHTML(
        "beforebegin",
        `<div class="${
          note_id3[i]
        }"><h1 style="font-family: 'Kaushan Script', cursive;
      ">Note:${
        i + 1
      }</h1><p style="font-family: 'Kaushan Script', cursive; color:black; text-align: center;  margin:1rem;        background:linear-gradient(170deg,white,white,	rgb(255, 191, 0));


    width:60%;margin:auto;" id="${note_id3[i]}" >${note_desc3[i].desc}</p>
    <button name="${note_id3[i]}" onclick="del_n(this.name)" >Delete Note${
          i + 1
        }</button>
    <button name="${note_id3[i]}" onclick="edit_n(this.name)"   >Edit Note${
          i + 1
        } </button>

    </div>`
      );
    }
  }
}

// const del_btn = document.querySelector('.del_n')
// del_btn.addEventListener('click', () => {
//   console.log('hi')
// })

function del_n(ele) {
  let m = 0;
  let n = 0;
  // const del_b = document.querySelector('.del_n')

  // console.log(del_b.parentElement.id)
  // console.log('hi'+ele)
  let note_no4 = parseInt(localStorage.getItem("note_no"));
  let note_id4 = JSON.parse(localStorage.getItem("note_id"));
  for (let i = 0; i < note_no4; i++) {
    if (ele == note_id4[i]) {
      m = i;
    }
  }

  for (let i = m; i < note_no4; i++) {
    note_id4[i] = note_id4[i + 1];
    // note_id4[i + 1] = ''
  }
  note_id4.pop();
  localStorage.setItem("note_id", JSON.stringify(note_id4));

  let note_desc4 = JSON.parse(localStorage.getItem("note_desc"));
  for (let i = 0; i < note_no4; i++) {
    if (ele == note_desc4[i].id) {
      n = i;
    }
  }

  for (let i = n; i < note_no4; i++) {
    note_desc4[i] = note_desc4[i + 1];
    // note_desc4[i + 1] = ''
  }
  note_desc4.pop();
  localStorage.setItem("note_desc", JSON.stringify(note_desc4));
  m = 0;
  n = 0;

  note_no4 = note_no4 - 1;
  localStorage.setItem("note_no", note_no4);
  window.location.reload();
}

const add_btn = document.getElementById("add_btn");
add_btn.addEventListener("click", () => {
  const note_no2 = localStorage.getItem("note_no");

  let N = parseInt(note_no2);
  N = N + 1;
  localStorage.setItem("note_no", N);

  const note_id2 = JSON.parse(localStorage.getItem("note_id"));
  if (note_id2 == null) {
    n_id.push(`note${N}`);
    localStorage.setItem("note_id", JSON.stringify(n_id));
  } else {
    note_id2.push(`note${N}`);
    localStorage.setItem("note_id", JSON.stringify(note_id2));
  }

  const note_desc2 = JSON.parse(localStorage.getItem("note_desc"));
  if (note_desc2 == null) {
    const tempobj1 = {
      desc: `${document.getElementById("write_area").value}`,
      id: `note${N}`,
    };
    n_desc.push(tempobj1);
    localStorage.setItem("note_desc", JSON.stringify(n_desc));
    //   n_desc=[]
  } else {
    const tempobj2 = {
      desc: `${document.getElementById("write_area").value}`,
      id: `note${N}`,
    };
    note_desc2.push(tempobj2);
    localStorage.setItem("note_desc", JSON.stringify(note_desc2));
  }

  document.getElementById("write_area").value = "";
  window.location.reload();
});

document.getElementById("del_all_btn").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

function edit_n(ele) {
  // console.log(ele)
  const wrt = document.getElementById("write_area");
  wrt.value = `${document.getElementById(`${ele}`).textContent}`;
  document
    .getElementById(`${ele}`)
    .insertAdjacentHTML(
      "afterend",
      `<button name="${ele}" onclick="change_n(this.name)">Overwrite</button>`
    );

  //   const note_no5 = localStorage.getItem('note_no')
  //   const note_desc5 = JSON.parse(localStorage.getItem('note_desc'))
  //   const note_id5 = JSON.parse(localStorage.getItem('note_id'))

  //   for(let i = 0; i <= note_no5; i++) {
  //     if(note_desc5[i].id == ele)
  //       note_desc5.desc = ` ${document.getElementById(`${ele}`).textContent}}`
  //   }
}

function change_n(ele) {
  const note_no5 = localStorage.getItem("note_no");
  const note_desc5 = JSON.parse(localStorage.getItem("note_desc"));
  for (let i = 0; i < note_no5; i++) {
    if (note_desc5[i].id == ele) {
      // console.log(note_desc5[i].id )
      // console.log(document.getElementById('write_area').value)
      note_desc5[i].desc = document.getElementById("write_area").value;
      //   break
    }
  }
  localStorage.setItem("note_desc", JSON.stringify(note_desc5));
  location.reload();
  // this.style.visibility= 'hidden'
  // document.getElementById/
}

document.getElementById("print_btn").addEventListener("click", () => {
  window.print();
});
