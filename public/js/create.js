let step = 1;

const nextFormHandler = () => {
  if(step === 1) {
    displayStep(2);
    step++;  
  } else if (step === 2) {
    displayStep(3);
    step++;  
  }
};

const backFormHandler = () => {
  if(step === 2) {
    displayStep(1);
    step--;  
  } else if (step === 3) {
    displayStep(2);
    step--;  
  }
}

const displayStep = (nextStep) => {
  if(nextStep === 1) {
    document.querySelector('#step-1').classList.remove('hidden');
    document.querySelector('#step-2').classList.add('hidden');
    document.querySelector('#step-3').classList.add('hidden');
  } else if (nextStep === 2) {
    document.querySelector('#step-2').classList.remove('hidden');
    document.querySelector('#step-1').classList.add('hidden');
    document.querySelector('#step-3').classList.add('hidden');
    document.querySelector('#submit-btn').classList.add('hidden');
    document.querySelector('#next-btn').classList.remove('hidden');
  } else if (nextStep === 3) {
    document.querySelector('#step-3').classList.remove('hidden');
    document.querySelector('#step-1').classList.add('hidden');
    document.querySelector('#step-2').classList.add('hidden');
    document.querySelector('#next-btn').classList.add('hidden');
    document.querySelector('#submit-btn').classList.remove('hidden');
  }
};

document.querySelector('#next-btn').addEventListener('click', nextFormHandler);
document.querySelector('#back-btn').addEventListener('click', backFormHandler);

window.addEventListener('keydown', function(event) {
  if(event.key === 'Enter') {
    event.preventDefault();
    return false;
  }
});

document.querySelector('#post-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = new FormData(this);

  const response = await fetch('/api/post', {
    method: 'POST',
    body: formData
  });

  if(response.ok) {
    console.log(response);
  } else {
    alert('Failed to create post.');
  }
});

document.querySelector('#image').addEventListener('change', function (event) {
  const reader = new FileReader();
  reader.onload = function(){
    const output = document.getElementById('image-preview');
    output.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
});