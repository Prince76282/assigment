
$(document).ready(function() {
    $('#submit').click(function() {
        // Reset error states
        $('.error-icon');

        // Validate inputs
        let valid = true;
        if (!$('#age').val()) {
            $('#ageError').show();
            valid = false;
        }
        if (!$('#income').val()) {
            $('#incomeError').show();
            valid = false;
        }

        if (valid) {
            // Calculate tax
            const age = $('#age').val();
            const income = parseFloat($('#income').val());
            const deductions = parseFloat($('#deductions').val()) || 0;
            const extraIncome = parseFloat($('#extraIncome').val()) || 0;

            let taxRate;
            if (age === '<40') {
                taxRate = 0.3;
            } else if (age === '≥ 40 & < 60') {
                taxRate = 0.4;
            } else {
                taxRate = 0.1;
            }

            const taxableIncome = Math.max(0, income + extraIncome - deductions - 800000);
            const taxAmount = taxRate * taxableIncome;

            // Display modal with results
            $('#taxAmount').text(`${taxAmount.toFixed(2)} `);
            $('#modal').modal('show');
        }
    });
});
