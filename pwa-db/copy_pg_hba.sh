#!/bin/bash

set -e
set -u


echo "Adding initial HBA entries for PWA core services"
echo "===================================="
cp /pwa-scripts/core_hba.conf /var/lib/postgresql/data/pg_hba.conf

# As of October 2020, we will reload pg at the end of our startup scripts.
#pg_ctl reload
#echo "Done."
